"""Benchmark tests for configuration module."""
import pytest
import os
from jiuwenclaw.config import resolve_env_vars
from pathlib import Path


class TestConfigBenchmark:
    """Performance benchmarks for configuration operations."""

    def test_resolve_env_vars_simple(self, benchmark):
        """Benchmark simple environment variable resolution."""
        config = {
            "api_key": "${TEST_API_KEY}",
            "model": "gpt-4",
        }
        os.environ["TEST_API_KEY"] = "test-key-12345"

        result = benchmark(resolve_env_vars, config)
        assert result["api_key"] == "test-key-12345"

        del os.environ["TEST_API_KEY"]

    def test_resolve_env_vars_nested(self, benchmark, sample_large_config):
        """Benchmark nested config environment variable resolution."""
        os.environ["TEST_API_KEY"] = "test-key-12345"
        os.environ["WORKSPACE_PATH"] = "/tmp/workspace"

        result = benchmark(resolve_env_vars, sample_large_config)
        assert result["model"]["api_key"] == "test-key-12345"

        del os.environ["TEST_API_KEY"]
        del os.environ["WORKSPACE_PATH"]

    def test_resolve_env_vars_deep_nesting(self, benchmark):
        """Benchmark deeply nested config resolution."""
        config = {
            "level1": {
                "level2": {
                    "level3": {
                        "level4": {
                            "value": "${DEEP_VAR}",
                        }
                    }
                }
            }
        }
        os.environ["DEEP_VAR"] = "deep-value"

        result = benchmark(resolve_env_vars, config)
        assert result["level1"]["level2"]["level3"]["level4"]["value"] == "deep-value"

        del os.environ["DEEP_VAR"]

    def test_resolve_env_vars_with_defaults(self, benchmark):
        """Benchmark resolution with default values."""
        config = {
            "api_key": "${MISSING_KEY:-default-key}",
            "timeout": "${TIMEOUT:-30}",
            "retries": "${RETRIES:-3}",
        }

        result = benchmark(resolve_env_vars, config)
        assert result["api_key"] == "default-key"
        assert result["timeout"] == "30"
        assert result["retries"] == "3"

    def test_resolve_env_vars_large_config(self, benchmark):
        """Benchmark resolution of large configuration."""
        # Generate large config with 50 keys
        config = {}
        for i in range(50):
            config[f"key_{i}"] = f"${{VAR_{i}:-default_{i}}}"

        # Set some env vars
        for i in range(25):
            os.environ[f"VAR_{i}"] = f"value_{i}"

        result = benchmark(resolve_env_vars, config)
        assert len(result) == 50
        assert result["key_0"] == "value_0"
        assert result["key_49"] == "default_49"

        # Clean up
        for i in range(25):
            del os.environ[f"VAR_{i}"]