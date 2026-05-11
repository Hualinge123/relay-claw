"""Benchmark tests for evolution module."""
import pytest
from jiuwenclaw.evolution.schema import (
    EvolutionEntry,
    EvolutionFile,
    EvolutionSignal,
    EvolutionType,
)
from jiuwenclaw.evolution.signal_detector import SignalDetector


class TestEvolutionBenchmark:
    """Performance benchmarks for evolution operations."""

    def test_evolution_signal_creation(self, benchmark):
        """Benchmark EvolutionSignal creation."""
        signal = benchmark(
            EvolutionSignal,
            type="user_correction",
            evolution_type=EvolutionType.SKILL_EXPERIENCE,
            section="Examples",
            excerpt="Test excerpt content",
            skill_name="test_skill",
        )
        assert signal.skill_name == "test_skill"

    def test_detect_single_signal(self, benchmark):
        """Benchmark single signal detection."""
        messages = [
            {"role": "assistant", "content": "Here's the result."},
            {"role": "user", "content": "That's wrong, I wanted something else."},
        ]
        detector = SignalDetector()

        result = benchmark(detector.detect, messages)
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
        detector = SignalDetector()

        result = benchmark(detector.detect, messages)
        assert isinstance(result, list)

    def test_signal_serialization_batch(self, benchmark):
        """Benchmark batch signal serialization."""
        signals = [
            EvolutionSignal(
                type="user_correction",
                evolution_type=EvolutionType.SKILL_EXPERIENCE,
                section="Examples",
                excerpt=f"Excerpt {i}",
                skill_name=f"skill_{i}",
            )
            for i in range(20)
        ]

        result = benchmark(lambda: [s.to_dict() for s in signals])
        assert len(result) == 20