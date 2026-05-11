"""Benchmark tests for signal detector module."""
import pytest
from jiuwenclaw.evolution.signal_detector import (
    detect_evolution_signals,
    deduplicate_signals,
)


class TestSignalDetectorBenchmark:
    """Performance benchmarks for signal detection."""

    def test_detect_no_signals(self, benchmark):
        """Benchmark detection when no signals present."""
        messages = [
            {"role": "assistant", "content": "Hello, how can I help?"},
            {"role": "user", "content": "Can you explain this concept?"},
            {"role": "assistant", "content": "Here's the explanation."},
            {"role": "user", "content": "Thanks, that was helpful."},
        ]

        result = benchmark(detect_evolution_signals, messages)
        assert len(result) == 0

    def test_detect_single_correction(self, benchmark):
        """Benchmark single user correction detection."""
        messages = [
            {"role": "assistant", "content": "The result is 42."},
            {"role": "user", "content": "No, I wanted 50 instead."},
        ]

        result = benchmark(detect_evolution_signals, messages)
        assert len(result) >= 1

    def test_detect_execution_failure(self, benchmark):
        """Benchmark execution failure detection."""
        messages = [
            {"role": "assistant", "content": "I'll execute the task."},
            {"role": "tool", "name": "test_tool", "content": "Error: failed"},
            {"role": "assistant", "content": "The task failed."},
        ]

        result = benchmark(detect_evolution_signals, messages)
        assert isinstance(result, list)

    def test_detect_in_large_conversation(self, benchmark):
        """Benchmark detection in 100-message conversation."""
        messages = []
        for i in range(50):
            messages.append({"role": "assistant", "content": f"Response {i}"})
            messages.append({"role": "user", "content": f"User message {i}"})

        # Add some correction signals
        messages[10]["content"] = "That's not what I wanted"
        messages[30]["content"] = "Wrong approach"

        result = benchmark(detect_evolution_signals, messages)
        assert isinstance(result, list)

    def test_deduplicate_small_list(self, benchmark):
        """Benchmark deduplication of small signal list."""
        from jiuwenclaw.evolution.schema import EvolutionSignal, EvolutionType

        signals = [
            EvolutionSignal(
                skill_name="skill1",
                evolution_type=EvolutionType.ADD_EXAMPLE,
                trigger="trigger1",
                excerpt="excerpt1",
            ),
            EvolutionSignal(
                skill_name="skill1",
                evolution_type=EvolutionType.ADD_EXAMPLE,
                trigger="trigger1",
                excerpt="excerpt1",
            ),
            EvolutionSignal(
                skill_name="skill2",
                evolution_type=EvolutionType.ADD_EXAMPLE,
                trigger="trigger2",
                excerpt="excerpt2",
            ),
        ]

        result = benchmark(deduplicate_signals, signals)
        assert len(result) == 2

    def test_deduplicate_large_list(self, benchmark):
        """Benchmark deduplication of large signal list."""
        from jiuwenclaw.evolution.schema import EvolutionSignal, EvolutionType

        signals = []
        for i in range(100):
            # Create duplicates every 5 items
            skill_name = f"skill_{i // 5}"
            signals.append(
                EvolutionSignal(
                    skill_name=skill_name,
                    evolution_type=EvolutionType.ADD_EXAMPLE,
                    trigger=f"trigger_{i}",
                    excerpt=f"excerpt_{i}",
                )
            )

        result = benchmark(deduplicate_signals, signals)
        assert len(result) < 100  # Should have fewer after deduplication

    def test_detect_with_tool_calls(self, benchmark):
        """Benchmark detection with tool call messages."""
        messages = [
            {"role": "assistant", "content": "I'll use the tool."},
            {
                "role": "tool",
                "name": "read_file",
                "content": "Error: file not found",
            },
            {"role": "assistant", "content": "File doesn't exist."},
            {"role": "user", "content": "Try a different file path."},
        ]

        result = benchmark(detect_evolution_signals, messages)
        assert isinstance(result, list)