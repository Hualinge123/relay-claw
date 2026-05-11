"""Benchmark test fixtures and utilities."""
import pytest
from pathlib import Path


@pytest.fixture
def benchmark_results_dir():
    """Directory to store benchmark results."""
    results_dir = Path(__file__).parent.parent.parent / "benchmark-results"
    results_dir.mkdir(exist_ok=True)
    return results_dir


@pytest.fixture
def sample_large_config():
    """Generate a large config for performance testing."""
    return {
        "model": {
            "provider": "test",
            "model_name": "test-model",
            "api_key": "${TEST_API_KEY}",
        },
        "channels": {
            "web": {"enabled": True},
            "feishu": {"enabled": False},
            "telegram": {"enabled": False},
        },
        "workspace": {
            "path": "/tmp/test_workspace",
            "presets": ["default"],
        },
        "memory": {
            "enabled": True,
            "max_entries": 1000,
        },
    }


@pytest.fixture
def sample_messages_batch():
    """Generate a batch of messages for performance testing."""
    from jiuwenclaw.schema.message import Message, AgentRequest

    messages = []
    for i in range(100):
        request = AgentRequest(
            session_id=f"test_session_{i}",
            user_id="test_user",
            content=f"Test message {i}",
        )
        message = Message.create_request_message(request)
        messages.append(message)
    return messages