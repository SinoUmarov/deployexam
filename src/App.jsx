import "./App.css";
import "./media.css";
import Header from "./components/header/header";
import Container from "./components/container/container";
import Login, { Login2 } from "./components/button/button";
import OurServices from "./components/ourServices/ourServices";
import calculator from "#/calculator.svg";
import raketa from "#/raketa.svg";
import yak from "#/yak.svg";
import du from "#/du.svg";
import se from "#/se.svg";
import invest1 from "#/invest1.svg";
import invest2 from "#/invest2.svg";
import invest3 from "#/invest3.svg";
import invest4 from "#/invest4.svg";
import sitora from "#/sitora.svg";
import Card, { Invest, NewCard, Number } from "./components/card/card";
import Tabss from "./components/tabs/tabs";
import Avatar from "./components/avatar/avaar";
import number1 from "#/number1.svg";
import number2 from "#/number2.svg";
import number3 from "#/number3.svg";
import img3 from "#/img3.svg";
import img2 from "#/img2.svg";
import img1 from "#/img1.svg";
import img4 from "#/img4.svg";
import img5 from "#/img5.svg";
import img6 from "#/img6.svg";
import price1 from "#/price1.svg";
import diagramma from "#/diagramma.svg";
import man from "#/man.svg";
import master1 from "#/master1.svg";
import master2 from "#/master2.svg";
import master3 from "#/master3.svg";
import master4 from "#/master4.svg";
import master5 from "#/master5.svg";
import avatar1 from "#/avatar1.svg";
import avatar2 from "#/avatar2.svg";
import avatar3 from "#/avatar3.svg";
import avatar4 from "#/avatar4.svg";
import newCard1 from "#/newCard1.svg";
import newCard2 from "#/newCard2.svg";
import newCard3 from "#/newCard3.svg";
import whatsapp from "#/whatsapp.svg";
import tme from "#/tme.svg";
import VideoPlayer from "./components/videoPlayer/videoPlayer";
import Accordions from "./components/accordion/accordion";
import Price from "./components/Price/Price";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div>
      <header>
        <Container>
          <Header />
          <section className="main">
            <div>
              <h1>
                Запустите{" "}
                <span style={{ backgroundColor: "#07AF91" }}>
                  технологический IT-бизнес
                </span>{" "}
                на международных рынках
              </h1>
              <p>Открыт набор заявок на акселератор</p>
            </div>
            <Login>Подать заявку</Login>
          </section>
        </Container>
      </header>

      <main>
        <Container>
          <div className="usligi">
            <h2 className="textBlue">Наши услуги</h2>

            <div className="analytic">
              <OurServices title={"Аналитические исследования"}>
                Одним из наших ключевых направлений является анализ
                технологических трендов на международных рынках. Мы проводим
                анализ на основе публичных исследований McKinsey, BCG, PWC,
                Deloitte, Accenture, BCG, EY, Crunchbase, Dealroom, F6S,
                PitchBook а также агрегируем и анализируем данные из открытых
                международных источников патенты, медиа, научные публикации
              </OurServices>
              <img className="instrument" src={calculator} alt="" />
            </div>

            <div className="analytic analytic2">
              <img className="instrument" src={raketa} alt="" />

              <OurServices title={"Онлайн акселератор для IT бизнеса"}>
                Онлайн программа аскелерации IT бизнеса позволит вашей команде
                открыть новые горизонты и возможности для бизнеса на глобальных
                рынках. В результате программы вы получите возможность
                презентовать свой проект для международных инвесторов и
                локальных партнеров
              </OurServices>
            </div>
          </div>

          <section className="who">
            <h2 className="textBlue">Для кого мы?</h2>
            <div className="divNumbers">
              <Card src={yak} title={"IT проекты на стадии идеи"}>
                Для стартапов, которые планируют привлечь международные
                инвестиции, протестировать спрос и запустить продукт
              </Card>

              <Card src={du} title={"Инновационный бизнес"}>
                Для уже работающего технологического бизнес, позволим найти
                новые международне рынки сбыта, масштабировать бизнес
              </Card>

              <Card src={se} title={"Корпорации"}>
                Для уже работающего технологического бизнес, позволим найти
                новые международне рынки сбыта, масштабировать бизнес
              </Card>
            </div>
          </section>

          <section className="group">
            <div className="issledovat">
              <h2>
                Научитесь исследовать иностранные рынки и откройте новые
                возможности для своего бизнеса
              </h2>
              <p>
                Наша команда поможет вам изучить рынки Ближнего Востока, Азии,
                Латинской Америки и Африки
              </p>
            </div>
            <Login2>Получить консультацию</Login2>
          </section>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              margin: "40px auto",
            }}
          >
            <h2 className="textBlue">С какими рынками мы работаем?</h2>
            <Tabss />
          </section>

          <section className="bazar">
            <div className="left">
              <h1>
                Чем интересен{" "}
                <span style={{ color: "#07AF91" }}>Рынок MENA:</span>
              </h1>
              <p className="lorem">
                ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар, Тунис,
                Йемен, Египет, Алжир
              </p>
              <Login2>Выйти на рынок</Login2>
              <Avatar
                src={sitora}
                name={"Fatima"}
                profession={"Менеджер по MENA"}
              />
            </div>

            <div className="divNumbers2">
              <Invest src={invest1} title={"Инвестиции pre-seed, seed"} />
              <Invest src={invest2} title={"Акселераторов, инкубаторов"} />
              <Invest src={invest3} title={"Венчурных фонда"} />
              <Invest
                className="divNumbers2Four"
                src={invest4}
                title={"Скачать отчетпо рынку MENA"}
              />
            </div>
          </section>

          <section className="IT">
            <div className="text">
              <h2 className="textBlue">Об акселераторе IT бизнеса</h2>
              <p className="lorem">
                Программа акселератора расчитана на 8 недель интенсивного онлайн
                курса с вебинарами приглашенных экспертов по международным
                рынкам, разборами ваших идей и проектов{" "}
              </p>
            </div>
            <div className="divNumbers">
              <Number src={number1}>Месяца обучения</Number>
              <Number src={number2}>Приглашенные эксперты</Number>
              <Number src={number3}>Персональный менеджер</Number>
            </div>
          </section>

          <section>
            <VideoPlayer />
          </section>

          <Accordions />

          <section className="bazar2">
            <div className="text ">
              <h2>Попадите на радары инвесторов и партнеров</h2>
              <p className="lorem">
                В результате прохождения обучения мы создадим профили вашей
                компании на всех международных скаутинговых площадках
              </p>
              <Login>Записаться в акселератор</Login>
            </div>
            <div className="divNumbers2">
              <img className="img" src={img1} alt="" />
              <img className="img" src={img2} alt="" />
              <img className="img" src={img3} alt="" />
              <img className="img" src={img1} alt="" />
              <img className="img" src={img2} alt="" />
              <img className="img" src={img3} alt="" />
            </div>
          </section>

          <section className="who">
            <h2 className="textBlue">Что вы получите в результате?</h2>
            <div className="divNumbers">
              <Card src={yak} title={"Документы по продукту"}>
                Бизнес план, отчет по анализу рынка, маркетинговый план, unit
                экономика, список гипотез, проект MVP
              </Card>

              <Card src={du} title={"Обратная связь от рынка"}>
                Проведение исследования целевой аудитории позволит сформировать
                Product market fit
              </Card>

              <Card src={se} title={"Продвижение продукта"}>
                Продвижение продукта через аналитические системы партнеров
              </Card>

              <Card src={yak} title={"Подписка на отчеты"}>
                Подписка на аналитические отчеты по международным рынкам
                высокотехнологичных сфер
              </Card>

              <Card src={du} title={"Подписка на отчеты"}>
                Подписка на аналитические отчеты по международным рынкам
                высокотехнологичных сфер
              </Card>

              <Card src={se} title={"Подписка на отчеты"}>
                Подписка на аналитические отчеты по международным рынкам
                высокотехнологичных сфер
              </Card>
            </div>
          </section>

          <section className="who">
            <h2 className="textBlue">Стоимость</h2>
            <div className="divNumbers">
              <Price
                src={price1}
                what={"1. Что входит в отчет?"}
                first={"2. Анализ конкурентов"}
                second={"3. Анализ инвесторов"}
                third={"4. Размеры рынка (TAM,SAM,SOM)"}
                fourth={"5. Анализ СМИ"}
                fifth={"6. Анализ запрос в сети интернет"}
              >
                Анализ международных рынков
              </Price>

              <Price
                src={price1}
                what={"1. Что входит в отчет?"}
                first={"2. Анализ конкурентов"}
                second={"3. Анализ инвесторов"}
                third={"4. Размеры рынка (TAM,SAM,SOM)"}
                fourth={"5. Анализ СМИ"}
                fifth={"6. Анализ запрос в сети интернет"}
              >
                Анализ международных рынков
              </Price>

              <Price
                src={price1}
                what={"1. Что входит в отчет?"}
                first={"2. Анализ конкурентов"}
                second={"3. Анализ инвесторов"}
                third={"4. Размеры рынка (TAM,SAM,SOM)"}
                fourth={"5. Анализ СМИ"}
                fifth={"6. Анализ запрос в сети интернет"}
              >
                Анализ международных рынков
              </Price>
            </div>
          </section>

          <div className="usligi">
            <h2 className="textBlue">Кто мы?</h2>

            <div className="analytic">
              <img className="instrument" src={diagramma} alt="" />

              <div className="Salom">
                <p className="lorem">
                  <span style={{ color: "#1178B2" }}>INNOMA.VC </span>-
                  Международное аналитическое агентство по запуску IT бизнеса на
                  локальных рынках регионов Азии, Ближнего Востока, Латинской
                  Америки, Африки. <br />
                  <br /> Наша команда состоит из профессионалов своего дела и
                  основной нашей целью является помощь IT компаниям получить
                  необходимые знания и пакеты документов, чтобы успешно
                  запустить свой продукт на международных рынках.
                </p>
              </div>
            </div>

            <div className="analytic analytic3">
              <img className="instrument" src={man} alt="" />

              <div className="Salom">
                <p className="lorem">
                  Всем привет! Меня зовут Роман. Последние 6 лет я являюсь
                  частью инновационной экосистемы СНГ, прошел путь от проектного
                  менеджера до руководителя продукта по автоматизированному
                  скаутингу и скорингу стартапов. За 6 лет работы я увидел
                  множество ошибок и отсутствие ориентации акселерационных
                  программ под запросы стартапов. Все акселераторы выполнялись
                  ради акселераторв и выполнения КПЭ.
                </p>
                <Avatar
                  name={"Роман Гайн"}
                  profession={"Основатель INNOMA.VC"}
                />
              </div>
            </div>
            
          </div>

          <section className="images">
            <img src={master1} alt="" />
            <img src={master2} alt="" />
            <img src={master3} alt="" />
            <img src={master4} alt="" />
            <img src={master5} alt="" />
          </section>

          <section className="who">
            <h2 className="textBlue">Эксперты и трекеры программы</h2>
            <div className="divNumbers">
              <Avatar
                width={"230px"}
                display="column"
                src={avatar1}
                name={"Юрий Ким"}
                profession={
                  "Проведение исследования целевой аудитории позволит сформировать Product market fit"
                }
              />
              <Avatar
                width={"230px"}
                display="column"
                src={avatar2}
                name={"Эшли Абрамс"}
                profession={
                  "Проведение исследования целевой аудитории позволит сформировать Product market fit"
                }
              />
              <Avatar
                width={"230px"}
                display="column"
                src={avatar3}
                name={"Fатими Юсуф"}
                profession={
                  "Проведение исследования целевой аудитории позволит сформировать Product market fit"
                }
              />
              <Avatar
                width={"230px"}
                display="column"
                src={avatar4}
                name={"Майкл Донован"}
                profession={
                  "Проведение исследования целевой аудитории позволит сформировать Product market fit"
                }
              />
            </div>
          </section>

          <section className="who">
            <h2 className="textBlue">Наши партнеры</h2>
            <div className="divNumbers2">
              <img className="img" src={img1} alt="" />
              <img className="img" src={img2} alt="" />
              <img className="img" src={img3} alt="" />
              <img className="img" src={img1} alt="" />
              <img className="img" src={img2} alt="" />
              <img className="img" src={img3} alt="" />
              <img className="img" src={img4} alt="" />
              <img className="img" src={img5} alt="" />
              <img className="img" src={img6} alt="" />
            </div>
          </section>

          <section className="group">
            <div className="issledovat2 ">
              <h2>Мы создаем международное сообщество экспертов и партнеров</h2>
              <p>
                Наша команда поможет вам изучить рынки Ближнего Востока, Азии,
                Латинской Америки и Африки
              </p>
            </div>
            <Login2>Получить консультацию</Login2>
          </section>

          <section className="who">
            <h2 className="textBlue">Мероприятия и события</h2>
            <div className="divNumbers2">
              <NewCard src={newCard1} title="Новый отчет по MENA">
                Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
                раундов, ТОП сферы)
              </NewCard>
              <NewCard
                src={newCard2}
                title="Вебинар по особенностям 
рынков Ближнего Востока"
              >
                Поговорим с экспертами рынков в формате дискуссии
              </NewCard>
              <NewCard src={newCard3} title="Новый отчет по MENA">
                Аналитический отчет по рынкам Ближнего Востока (инвесторы, объем
                раундов, ТОП сферы)
              </NewCard>
            </div>
          </section>

          <section className="bazar2">
            <div className="question">
              <div className="text ">
                <h2>Остались вопросы?</h2>
                <p className="lorem">
                  Оставьте заявку и наша команда свяжется с вами
                </p>
              </div>

              <div>
                <p>Или напишите нам:</p>
                <div>
                  <img src={tme} alt="" />
                  <img src={whatsapp} alt="" />
                </div>
              </div>
            </div>

            <div className="form">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Почта" />
              <input type="text" placeholder="(971) " />
              <Login>Оставить заявку</Login>
            </div>
          </section>


        </Container>
      </main>

      <footer>
        <Container>
          <Footer/>
        </Container>
      </footer>
    </div>
  );
}
