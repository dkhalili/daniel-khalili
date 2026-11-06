"""Build the resume from Markdown in the original navy-banner visual style."""
from pathlib import Path
import re
from html import escape

from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Flowable, PageBreak

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "output/pdf/DanielKhalili_Resume.pdf"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")
if (FONT_DIR / "Arial.ttf").exists():
    for name, file in [("Resume", "Arial.ttf"), ("ResumeBold", "Arial Bold.ttf"), ("ResumeItalic", "Arial Italic.ttf")]:
        pdfmetrics.registerFont(TTFont(name, str(FONT_DIR / file)))
    pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeBold", italic="ResumeItalic", boldItalic="ResumeBold")
    BODY, BOLD, ITALIC = "Resume", "ResumeBold", "ResumeItalic"
else:
    BODY, BOLD, ITALIC = "Helvetica", "Helvetica-Bold", "Helvetica-Oblique"

NAVY = colors.HexColor("#0F2D52")
PALE = colors.HexColor("#E8F0FE")
BLUE = colors.HexColor("#1955FF")
INK = colors.HexColor("#202020")
WIDTH = 522
styles = {
    "body": ParagraphStyle("body", fontName=BODY, fontSize=9, leading=10.9, textColor=INK, spaceAfter=4),
    "bullet": ParagraphStyle("bullet", fontName=BODY, fontSize=9, leading=10.9, textColor=colors.HexColor("#444444"), leftIndent=16, bulletIndent=6, spaceAfter=2.5),
    "company": ParagraphStyle("company", fontName=BOLD, fontSize=12, leading=15, textColor=NAVY, spaceBefore=6, spaceAfter=4, keepWithNext=True),
    "role": ParagraphStyle("role", fontName=BOLD, fontSize=10.5, leading=13, textColor=INK, spaceBefore=5, spaceAfter=3, keepWithNext=True),
    "context": ParagraphStyle("context", fontName=ITALIC, fontSize=8.5, leading=10.5, textColor=colors.HexColor("#555555"), spaceAfter=4, keepWithNext=True),
}

def inline(value):
    value = escape(value)
    value = re.sub(r"\[([^\]]+)\]\((https://[^)]+)\)", r'<link href="\2" color="#0F2D52">\1</link>', value)
    return re.sub(r"\*\*(.+?)\*\*", r'<font name="'+BOLD+r'" color="#0F2D52">\1</font>', value)

class SectionBar(Flowable):
    def __init__(self, title):
        Flowable.__init__(self)
        self.title, self.width, self.height = title, WIDTH, 13
        self.spaceBefore, self.spaceAfter, self.keepWithNext = 7, 4, True

    def draw(self):
        c = self.canv
        c.setFillColor(PALE)
        c.rect(0, 0, self.width, 13, fill=1, stroke=0)
        c.setFillColor(BLUE)
        c.rect(0, 0, 2, 13, fill=1, stroke=0)
        c.setFont(BOLD, 9.5)
        c.setFillColor(NAVY)
        c.drawString(7, 3, self.title.upper())

def first_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(45, 711, WIDTH, 81, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont(BOLD, 34)
    canvas.drawCentredString(306, 760, "Daniel Khalili")
    canvas.setFillColor(colors.HexColor("#9ACBFF"))
    canvas.setFont(BODY, 10)
    canvas.drawCentredString(306, 744, "Engineering Manager  |  10+ Years Software Engineering  |  Ad Tech  |  Agentic AI  |  Full-Stack")
    canvas.setFont(BODY, 11)
    canvas.drawCentredString(306, 731, "DanielKhalili.com")
    canvas.linkURL("https://danielkhalili.com", (255, 728, 357, 741), relative=0)
    contact = 'dkhalili93@gmail.com   |   (516) 574-1860   |   <link href="https://github.com/dkhalili" color="#9ACBFF">github.com/dkhalili</link>   |   <link href="https://linkedin.com/in/danielkhalili" color="#9ACBFF">linkedin.com/in/danielkhalili</link>'
    p = Paragraph(contact, ParagraphStyle("contact", fontName=BODY, fontSize=8.5, leading=11, textColor=colors.HexColor("#D5E2F2"), alignment=1))
    p.wrap(WIDTH, 20)
    p.drawOn(canvas, 45, 716)
    canvas.restoreState()

def main():
    DEST.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(str(DEST), pagesize=(612, 792), title="Daniel Khalili - Engineering Manager", author="Daniel Khalili")
    doc.addPageTemplates([
        PageTemplate(id="first", frames=[Frame(45, 35, WIDTH, 655, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)], onPage=first_page, autoNextPageTemplate="later"),
        PageTemplate(id="later", frames=[Frame(45, 35, WIDTH, 727, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)]),
    ])
    story, context_next = [], False
    for line in (ROOT / "resume/resume.md").read_text().splitlines():
        if not line.strip():
            continue
        if line == "<!-- pagebreak -->":
            story.append(PageBreak())
        elif line.startswith("## "):
            story.append(SectionBar(line[3:]))
        elif line.startswith("### "):
            company, _, location = line[4:].partition(" | ")
            story.append(Paragraph(inline(company) + ' <font name="'+BODY+'" size="8.5" color="#555555">  '+escape(location)+'</font>', styles["company"]))
            context_next = company == "Kargo"
        elif line.startswith("#### "):
            role, _, dates = line[5:].rpartition(" | ")
            story.append(Paragraph(escape(role) + ' <font size="8" color="#0F2D52"> '+escape(dates)+'</font>', styles["role"]))
        elif line.startswith("- "):
            story.append(Paragraph(inline(line[2:]), styles["bullet"], bulletText="\u2022"))
        elif not story:
            continue  # Header metadata is rendered in the original banner.
        else:
            story.append(Paragraph(inline(line), styles["context" if context_next else "body"]))
            context_next = False
    doc.build(story)
    print(DEST)

if __name__ == "__main__":
    main()
