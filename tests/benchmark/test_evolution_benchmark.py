"""Benchmark tests for evolution module."""
import pytest
from jiuwenclaw.evolution.schema import (
    EvolutionEntry,
    EvolutionFile,
    EvolutionSignal,
    EvolutionType,
)
from jiuwenclaw.evolution.signal_detector import detect_evolution_signals


class TestEvolutionBenchmark:
    """Performance benchmarks for evolution operations."""

    def test_evolution_entry_creation(self, benchmark):
        """Benchmark EvolutionEntry creation."""
        entry = benchmark(
            EvolutionEntry.make,
            skill_name="test_skill",
            evolution_type=EvolutionType.ADD_EXAMPLE,
            content="Test example content",
        )
        assert entry.skill_name == "test_skill"

    def test_evolution_entry_to_dict(self, benchmark):
        """Benchmark EvolutionEntry serialization."""
        entry = EvolutionEntry.make(
            skill_name="test_skill",
            evolution_type=EvolutionType.ADD_EXAMPLE,
            content="Test content",
        )

        result = benchmark(entry.to_dict)
        assert isinstance(result, dict)
        assert result["skill_name"] == "test_skill"

    def test_evolution_file_creation(self, benchmark):
        """Benchmark EvolutionFile creation with multiple entries."""
        entries = [
            EvolutionEntry.make(
                skill_name=f"skill_{i}",
                evolution_type=EvolutionType.ADD_EXAMPLE,
                content=f"Content {i}",
            )
            for i in range(10)
        ]

        result = benchmark(
            EvolutionFile,
            file_path="test.md",
            entries=entries,
        )
        assert len(result.entries) == 10

    def test_evolution_file_to_dict(self, benchmark):
        """Benchmark EvolutionFile serialization."""
        entries = [
            EvolutionEntry.make(
                skill_name=f"skill_{i}",
                evolution_type=EvolutionType.ADD_EXAMPLE,
                content=f"Content {i}",
            )
            for i in range(10)
        ]
        ev_file = EvolutionFile(
            file_path="test.md",
            entries=entries,
        )

        result = benchmark(ev_file.to_dict)
        assert isinstance(result, dict)
        assert "entries" in result

    def test_evolution_signal_creation(self, benchmark):
        """Benchmark EvolutionSignal creation."""
        signal = benchmark(
            EvolutionSignal,
            skill_name="test_skill",
            evolution_type=EvolutionType.ADD_EXAMPLE,
            trigger="Test trigger message",
            excerpt="Test excerpt",
        )
        assert signal.skill_name == "test_skill"

    def test_detect_single_signal(self, benchmark):
        """Benchmark single signal detection."""
        messages = [
            {"role": "assistant", "content": "Here's the result."},
            {"role": "user", "content": "That's wrong, I wanted something else."},
        ]

        result = benchmark(detect_evolution_signals, messages)
        assert len(result) >= 0

    def test_detect_multiple_signals(self, benchmark):
        """Benchmark multiple signal detection in large conversation."""
        # Generate conversation with 20 messages
        messages = []
        for i in range(20):
            messages.append({"role": "assistant", "content": f"Response {i}"})
            if i % 5 == 4:
                messages.append(
                    {"role": "user", "content": f"That's not what I wanted for {i}"}
                )

        result = benchmark(detect_evolution_signals, messages)
        assert isinstance(result, list)

    def test_signal_serialization_batch(self, benchmark):
        """Benchmark batch signal serialization."""
        signals = [
            EvolutionSignal(
                skill_name=f"skill_{i}",
                evolution_type=EvolutionType.ADD_EXAMPLE,
                trigger=f"Trigger {i}",
                excerpt=f"Excerpt {i}",
            )
            for i in range(20)
        ]

        result = benchmark(lambda: [s.to_dict() for s in signals])
        assert len(result) == 20