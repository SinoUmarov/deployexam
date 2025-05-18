import "./accordion.css";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordions() {
  return (
    <div className="divAccordion">
      <h2 className="textBlue">Программа акселератора</h2>

      <Accordion>
        <AccordionSummary
        className="first"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 1:</span>{" "}
            <b>Тенденции и тренды современного мира</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordionChild">
          Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов
          консалтинговых компаний
        </AccordionDetails>
        <AccordionDetails className="accordionChild">
          Тема 2. Рынки Ближнего Востока, Азии, Латинской АмерикиТема
        </AccordionDetails>
        <AccordionDetails className="accordionChild">
          3. Что такое внутренние и внешние инновации? Как искать инновационные
          идеи?
        </AccordionDetails>
        <AccordionDetails className="textBlue accordionChild">
          9 видео роликов, вебинар с приглашенным экспертом
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary 
        className="first"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 2:</span>{" "}
            <b>Стартап подход к созданию международного IT продукта</b>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
        className="first"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 3:</span>{" "}
            <b>Бизнес моделирование и поиск Product Market Fit </b>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
        className="first"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 4:</span>{" "}
            <b>Определение рынка, поиск и исследование Целевой аудитории</b>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
        className="first"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 5:</span>{" "}
            <b>Что такое MVP и почему это важно</b>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
        className="first"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 6:</span>{" "}
            <b>Unit экономика и финансовое моделирование</b>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
        className="first"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 7:</span>{" "}
            <b>Что такое дорожная карта продукта?</b>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
        className="first"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 8:</span>{" "}
            <b>Документы дя международных инвесторов</b>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
        className="first"

          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Модуль 9:</span>{" "}
            <b>Открытие юридического лица. Возможности для стартапов</b>
          </Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ paddingLeft: "50px" }}
        >
          <Typography component="span">
            <span style={{ color: "#2A79C2" }}>Демо день </span>{" "}
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
