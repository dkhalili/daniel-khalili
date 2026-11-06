# Resume source

`resume.md` is the editable source for the downloadable resume. It is also the editorial reference for the website content in `src/data/`.

## Build

Install ReportLab in your Python environment, then run:

```sh
python3 scripts/build_resume.py
```

The generator writes `output/pdf/DanielKhalili_Resume.pdf`. It uses Arial when available on macOS and Helvetica otherwise.

Render and visually review every page before copying the approved PDF to `public/DanielKhalili_Resume.pdf`, which is served by the website's Resume links. Keep the original navy header and section bars when updating the document.

When content changes, synchronize the experience and initiatives in `src/data/`, update `src/data/meta.ts`, and verify the website build.
