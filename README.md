# OpenSpeedTest (Dext Fork)

Dext's fork of [OpenSpeedTest](https://github.com/openspeedtest/Speed-Test) — a free, open-source HTML5 network speed test tool. See the upstream repo for full documentation, configuration options, and feature details.

## What's different

- Custom look and feel
- Shareable results links with approximate speed graphs
- Stripped-down for a single self-hosted deployment

## Deployment

Shipped as a Docker image via the included `Dockerfile` (nginx-unprivileged on Alpine). Build and run:

```bash
docker build -t openspeedtest .
docker run -d -p 3000:3000 openspeedtest
```

Then open `http://<host>:3000`.

## License

MIT — see [LICENSE.md](LICENSE.md).
