window.BENCHMARK_DATA = {
  "lastUpdate": 1778510601556,
  "repoUrl": "https://github.com/Hualinge123/relay-claw",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "whl_zju@163.com",
            "name": "hualinge",
            "username": "Hualinge123"
          },
          "committer": {
            "email": "whl_zju@163.com",
            "name": "hualinge",
            "username": "Hualinge123"
          },
          "distinct": true,
          "id": "de8e08b61203b0231bedc8b28cd5a44b8ee5af1c",
          "message": "fix: remove external-data-json-path for auto-push compatibility\n\n- Remove cache step for previous benchmark data\n- Remove external-data-json-path parameter\n- Use gh-pages branch for data storage (managed by benchmark-action)",
          "timestamp": "2026-05-11T22:42:27+08:00",
          "tree_id": "1e0219022384fee5795714dc420f0911a577ca43",
          "url": "https://github.com/Hualinge123/relay-claw/commit/de8e08b61203b0231bedc8b28cd5a44b8ee5af1c"
        },
        "date": 1778510600571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_simple",
            "value": 302074.289611589,
            "unit": "iter/sec",
            "range": "stddev: 7.34772938146319e-7",
            "extra": "mean: 3.3104439351187844 usec\nrounds: 2836"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_nested",
            "value": 103351.66105300606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016618397073250678",
            "extra": "mean: 9.675703223455008 usec\nrounds: 27765"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_deep_nesting",
            "value": 264204.4943731531,
            "unit": "iter/sec",
            "range": "stddev: 8.179608708895793e-7",
            "extra": "mean: 3.7849469683420125 usec\nrounds: 44860"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_with_defaults",
            "value": 117328.37468078212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013626304880029766",
            "extra": "mean: 8.52308746900076 usec\nrounds: 25792"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_large_config",
            "value": 8556.97400046377,
            "unit": "iter/sec",
            "range": "stddev: 0.00001429791168556087",
            "extra": "mean: 116.86374177902165 usec\nrounds: 6599"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_evolution_signal_creation",
            "value": 1435324.1612946235,
            "unit": "iter/sec",
            "range": "stddev: 2.5594342654482566e-7",
            "extra": "mean: 696.70672797567 nsec\nrounds: 159439"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_detect_single_signal",
            "value": 311873.18851699977,
            "unit": "iter/sec",
            "range": "stddev: 7.542004782556972e-7",
            "extra": "mean: 3.2064314497669346 usec\nrounds: 41641"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_detect_multiple_signals",
            "value": 57299.702119327136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020500623772187398",
            "extra": "mean: 17.45209770754988 usec\nrounds: 33283"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_signal_serialization_batch",
            "value": 117482.67868875754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015594107097115793",
            "extra": "mean: 8.511893082122025 usec\nrounds: 52068"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_no_signals",
            "value": 140325.84316801064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011820089705290881",
            "extra": "mean: 7.126271094645841 usec\nrounds: 43210"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_execution_failure",
            "value": 275559.6021949024,
            "unit": "iter/sec",
            "range": "stddev: 7.809779654338844e-7",
            "extra": "mean: 3.628978965112249 usec\nrounds: 37937"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_in_large_conversation",
            "value": 11112.248267066989,
            "unit": "iter/sec",
            "range": "stddev: 0.000004731303763994514",
            "extra": "mean: 89.9907899793481 usec\nrounds: 9680"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_with_tool_calls",
            "value": 156343.486235057,
            "unit": "iter/sec",
            "range": "stddev: 0.000001079322519477691",
            "extra": "mean: 6.396173093495783 usec\nrounds: 34802"
          }
        ]
      }
    ]
  }
}