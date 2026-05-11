"""Benchmark tests for signal detector module."""
import pytest
from jiuwenclaw.evolution.signal_detector import SignalDetector


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
        detector = SignalDetector()

        result = benchmark(detector.detect, messages)
        assert len(result) == 0

    def test_detect_execution_failure(self, benchmark):
        """Benchmark execution failure detection."""
        messages = [
            {"role": "assistant", "content": "I'll execute the task."},
            {"role": "tool", "name": "test_tool", "content": "Error: failed"},
            {"role": "assistant", "content": "The task failed."},
        ]
        detector = SignalDetector()

        result = benchmark(detector.detect, messages)
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
        detector = SignalDetector()

        result = benchmark(detector.detect, messages)
        assert isinstance(result, list)

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
        detector = SignalDetector()

        result = benchmark(detector.detect, messages)
        assert isinstance(result, list)