window.BENCHMARK_DATA = {
  "lastUpdate": 1778511233410,
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
      },
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
          "id": "ef211c50593418435a8b7c2029abb0b1f7704d43",
          "message": "fix: disable Git LFS to avoid large file download errors\n\n- Add lfs: false to checkout step\n- Configure global Git LFS to skip smudge filter\n- Prevents benchmark-action checkout failure on LFS files",
          "timestamp": "2026-05-11T22:46:26+08:00",
          "tree_id": "c362059020da7381f2f79c7e28de30451132e28c",
          "url": "https://github.com/Hualinge123/relay-claw/commit/ef211c50593418435a8b7c2029abb0b1f7704d43"
        },
        "date": 1778510833869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_simple",
            "value": 409534.8325187985,
            "unit": "iter/sec",
            "range": "stddev: 5.320941395552398e-7",
            "extra": "mean: 2.4417947402657085 usec\nrounds: 3118"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_nested",
            "value": 141403.04121784263,
            "unit": "iter/sec",
            "range": "stddev: 7.5420829976107e-7",
            "extra": "mean: 7.071983681450107 usec\nrounds: 20345"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_deep_nesting",
            "value": 337391.5304639143,
            "unit": "iter/sec",
            "range": "stddev: 0.000002486845088030586",
            "extra": "mean: 2.9639155393883097 usec\nrounds: 55813"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_with_defaults",
            "value": 159105.67096266279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011502785797353624",
            "extra": "mean: 6.285131095262275 usec\nrounds: 29162"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_large_config",
            "value": 11460.006152702184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034561954304106053",
            "extra": "mean: 87.25998805543465 usec\nrounds: 8372"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_evolution_signal_creation",
            "value": 2722160.5510899425,
            "unit": "iter/sec",
            "range": "stddev: 3.862718153866246e-8",
            "extra": "mean: 367.35526109935137 nsec\nrounds: 112448"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_detect_single_signal",
            "value": 411852.24880704074,
            "unit": "iter/sec",
            "range": "stddev: 4.788826036854993e-7",
            "extra": "mean: 2.428055213724269 usec\nrounds: 44536"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_detect_multiple_signals",
            "value": 76409.69724723646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010905944160436341",
            "extra": "mean: 13.087344094092291 usec\nrounds: 42779"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_signal_serialization_batch",
            "value": 153306.77921020324,
            "unit": "iter/sec",
            "range": "stddev: 6.820425552306284e-7",
            "extra": "mean: 6.522868754739618 usec\nrounds: 57023"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_no_signals",
            "value": 210646.89670158166,
            "unit": "iter/sec",
            "range": "stddev: 6.206645949504537e-7",
            "extra": "mean: 4.747280950531523 usec\nrounds: 48731"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_execution_failure",
            "value": 359983.1986789043,
            "unit": "iter/sec",
            "range": "stddev: 4.708535364946538e-7",
            "extra": "mean: 2.777907423651664 usec\nrounds: 42311"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_in_large_conversation",
            "value": 15395.88646045623,
            "unit": "iter/sec",
            "range": "stddev: 0.000005152506267200593",
            "extra": "mean: 64.95241456660929 usec\nrounds: 13373"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_with_tool_calls",
            "value": 208950.62690462338,
            "unit": "iter/sec",
            "range": "stddev: 7.505113918456673e-7",
            "extra": "mean: 4.785819572852755 usec\nrounds: 36009"
          }
        ]
      },
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
          "id": "ea4801eb62cada606486ce06f2f1f220f951b8d4",
          "message": "fix: relax benchmark threshold for initial baseline setup\n\n- Increase alert-threshold from 10% to 20% for environment variance\n- Set fail-on-alert to false temporarily until stable baseline established\n- Will tighten threshold and enable gate after multiple runs",
          "timestamp": "2026-05-11T22:53:04+08:00",
          "tree_id": "331f4b0e45845f83c383936a9af233dba41b2b48",
          "url": "https://github.com/Hualinge123/relay-claw/commit/ea4801eb62cada606486ce06f2f1f220f951b8d4"
        },
        "date": 1778511232693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_simple",
            "value": 308556.1887526089,
            "unit": "iter/sec",
            "range": "stddev: 7.731554216167748e-7",
            "extra": "mean: 3.2409008033274938 usec\nrounds: 2490"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_nested",
            "value": 108653.37056877403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012341589533895962",
            "extra": "mean: 9.203580107687802 usec\nrounds: 27669"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_deep_nesting",
            "value": 275123.11528591526,
            "unit": "iter/sec",
            "range": "stddev: 7.47899201181466e-7",
            "extra": "mean: 3.63473639414403 usec\nrounds: 45348"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_with_defaults",
            "value": 122564.69089215863,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012365337858341337",
            "extra": "mean: 8.158956651552062 usec\nrounds: 29482"
          },
          {
            "name": "tests/benchmark/test_config_benchmark.py::TestConfigBenchmark::test_resolve_env_vars_large_config",
            "value": 8839.669308625382,
            "unit": "iter/sec",
            "range": "stddev: 0.000004360161255297519",
            "extra": "mean: 113.12640383778175 usec\nrounds: 6983"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_evolution_signal_creation",
            "value": 1511083.709791062,
            "unit": "iter/sec",
            "range": "stddev: 5.854057490601525e-7",
            "extra": "mean: 661.7767060292579 nsec\nrounds: 189826"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_detect_single_signal",
            "value": 312303.9488482904,
            "unit": "iter/sec",
            "range": "stddev: 6.091221864075865e-7",
            "extra": "mean: 3.2020088240567697 usec\nrounds: 37511"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_detect_multiple_signals",
            "value": 59814.87096980663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017109418390476778",
            "extra": "mean: 16.71825055854054 usec\nrounds: 32675"
          },
          {
            "name": "tests/benchmark/test_evolution_benchmark.py::TestEvolutionBenchmark::test_signal_serialization_batch",
            "value": 118031.29916408284,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014365000695981184",
            "extra": "mean: 8.472329010035178 usec\nrounds: 48497"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_no_signals",
            "value": 162086.06992408674,
            "unit": "iter/sec",
            "range": "stddev: 9.293845208953589e-7",
            "extra": "mean: 6.169561643812769 usec\nrounds: 40807"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_execution_failure",
            "value": 278400.30423081684,
            "unit": "iter/sec",
            "range": "stddev: 6.314676773101317e-7",
            "extra": "mean: 3.59195009776612 usec\nrounds: 35790"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_in_large_conversation",
            "value": 11724.385784777713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010948276659799568",
            "extra": "mean: 85.29231452775497 usec\nrounds: 10387"
          },
          {
            "name": "tests/benchmark/test_signal_detector_benchmark.py::TestSignalDetectorBenchmark::test_detect_with_tool_calls",
            "value": 163603.1080138816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010033685074733711",
            "extra": "mean: 6.112353317365772 usec\nrounds: 32526"
          }
        ]
      }
    ]
  }
}