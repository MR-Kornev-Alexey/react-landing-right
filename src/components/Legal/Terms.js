import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const defaultTheme = createTheme();

export default function Terms({title}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {/* Hero unit */}
            <Container disableGutters maxWidth="md" sx={{ pt: 4, pb: 2 }} className={"terms"}>
                <h2 style={{textAlign: "center"}}><strong>Пользовательское соглашение</strong></h2>
                <p>&nbsp;</p>
                <p>1. ОБЩИЕ ПОЛОЖЕНИЯ</p>
                <p>&nbsp;</p>
                <p>1.1. Настоящее Пользовательское соглашение (далее &ndash; <strong>Соглашение</strong>) относится к совокупности связанных между собой веб-страниц, размещенных в сети Интернет по уникальным адресам (URL): <strong data-redactor-tag="strong">elenakorneva.ru</strong>, <strong data-redactor-tag="strong">elenakorneva.site&nbsp;</strong>, а также их субдоменах, а также&nbsp;<strong>Helenbot</strong></p>
                <p>1.2. Cвязанныe между собой веб-страницы, размещенные в сети Интернет по уникальным адресам (URL): <strong data-redactor-tag="strong">elenakorneva.ru</strong>, <strong data-redactor-tag="strong">elenakorneva.site&nbsp;</strong>, а также их субдомены, а также <strong>Helenbot </strong>(далее &ndash; <strong>Ресурсы Елены Корневой</strong>) являются собственностью самозанятого консультанта <strong>Корневой Елены Викторовны</strong>.</p>
                <p>1.3. Настоящее Соглашение регулирует отношения между Администрацией <strong>Ресурсов Елены Корневой</strong> (далее &ndash; <strong>Администрация </strong>) и Пользователем данных ресурсов.</p>
                <p>1.4. <strong>Администрация</strong> оставляет за собой право в любое время изменять, добавлять или удалять пункты настоящего Соглашения без уведомления Пользователя.</p>
                <p>1.5. Продолжение использования <strong>Ресурсов Елены Корневой </strong>Пользователем означает принятие Соглашения и изменений, внесенных в настоящее Соглашение.</p>
                <p>1.6. <strong>Пользователь</strong> несет персональную ответственность за проверку настоящего Соглашения на наличие изменений в нем.</p>
                <p>&nbsp;</p>
                <p>2. ОПРЕДЕЛЕНИЯ ТЕРМИНОВ</p>
                <p>&nbsp;</p>
                <p>2.1. Перечисленные ниже термины имеют для целей настоящего Соглашения следующее значение:</p>
                <p>2.1.1. П<strong>рограммы Елены Корневой </strong>&ndash; совокупность онлайн программ, расположенных на <strong data-redactor-tag="strong">elenakorneva.ru</strong>, <strong data-redactor-tag="strong">elenakorneva.site, Helenbot </strong>и осуществляющие свою деятельность посредством Интернет-ресурса и сопутствующих ему сервисов.</p>
                <p>2.1.2. П<strong>рограммы Елены Корневой </strong> &ndash; сайты и приложения, содержащие информацию об основах развития ребенка. Содержат теоретический курс, тесты,&nbsp; раздаточные материалы для пользователей. Прохождение программ осуществляется непосредственно на сайтах или в боте и не требует установки дополнительного софта.</p>
                <p>2.1.3. <strong>Администрация </strong> &ndash; уполномоченные сотрудники на управления <strong>Ресурсами Елены Корневой</strong> действующие от имени <strong>Корневой Елены Викторовны</strong>.</p>
                <p>2.1.4. Пользователь ресурсов (далее ‑ <strong>Пользователь)</strong> &ndash; дееспособное физическое лицо, присоединившееся к настоящему Соглашению в собственном интересе либо выступающее от имени и в интересах представляемого им юридического лица, имеющее доступ к <strong>Ресурсам Елены Корневой </strong>&nbsp;посредством сети Интернет и использующее данные ресурсы.</p>
                <p>2.1.5. Сервис &mdash; комплекс услуг, предоставляемых Пользователю с использованием Платформ <strong>Ресурсов Елены Корневой</strong> .</p>
                <p>2.1.6. Содержание <strong>Ресурсов Елены Корневой</strong> (далее &ndash; <strong>Содержание</strong>) &mdash; охраняемые результаты интеллектуальной деятельности, включая тексты задач, их названия, статьи, иллюстрации, графические, текстовые, фотографические, производные, составные и иные произведения, пользовательские интерфейсы, визуальные интерфейсы, названия товарных знаков, логотипы, программы для ЭВМ, базы данных, а также дизайн, структура, выбор, координация, внешний вид, общий стиль и расположение данного Содержания, входящего в состав Ресуросов и другие объекты интеллектуальной собственности все вместе и/или по отдельности, содержащиеся на <strong>Ресурсам Елены Корневой</strong>.</p>
                <p>&nbsp;</p>
                <p>3. ПРЕДМЕТ СОГЛАШЕНИЯ</p>
                <p>&nbsp;</p>
                <p>3.1. Предметом настоящего Соглашения является предоставление <strong>Пользователю</strong> доступа к содержащимся на <strong>Ресурсах Елены Корневой </strong>видео, текстам, тестам, формам обратной связи с Администрацией и другим материлам.</p>
                <p>3.2. <strong>Ресурсы&nbsp; Елены Корневой </strong>предоставляют <strong>Пользователю</strong> информационные услуги &mdash; доступ к материалам и сервисам <strong>Ресурсов Елены Корневой</strong></p>
                <p>3.3. Под действие настоящего Соглашения подпадают все существующие (реально функционирующие) на данный момент услуги (сервисы) <strong>Ресурсов Елены Корневой</strong>, а также любые их последующие модификации и появляющиеся в дальнейшем дополнительные услуги (сервисы) <strong>Ресурсов Елены Корневой</strong>.</p>
                <p>3.4. Доступ к <strong>Ресурсам Елены Корневой </strong>может&nbsp; предоставляться на платной основе.</p>
                <p>3.5. Настоящее Соглашение является <strong>публичной офертой</strong>. Получая доступ к <strong>Ресурсам Елены Корневой&nbsp; Пользователь</strong> считается присоединившимся к настоящему <strong>Соглашению</strong>.</p>
                <p>3.6. Использование материалов и сервисов <strong>Ресурсов Елены Корневой </strong>регулируется нормами действующего законодательства Российской Федерации.</p>
                <p>&nbsp;</p>
                <p>4. ПРАВА И ОБЯЗАННОСТИ СТОРОН</p>
                <p>&nbsp;</p>
                <p>4.1. Администрация <strong>Ресурсов Елены Корневой</strong>&nbsp; вправе:</p>
                <p>4.1.1. Изменять правила пользования <strong>Ресурсов Елены Корневой</strong> , а также изменять содержание&nbsp; <strong>Ресурсов Елены Корневой</strong> . Изменения вступают в силу с момента публикации новой редакции Соглашения на <strong>Ресурсов Елены Корневой</strong>&nbsp;.</p>
                <p>4.1.2. Ограничить доступ к <strong>Ресурсам Елены Корневой</strong>&nbsp; в случае нарушения <strong>Пользователем</strong> условий настоящего Соглашения.</p>
                <p>4.1.3. Изменять размер оплаты, взимаемый за предоставление доступа к использованию <strong>Ресурсов Елены Корневой</strong>. Изменение стоимости не будет распространяться на <strong>Пользователей</strong>, имеющих регистрацию к моменту изменения размера оплаты, за исключением случаев, особо оговоренных Администрацией.</p>
                <p>&nbsp;</p>
                <p>4.2. Пользователь вправе:</p>
                <p>&nbsp;</p>
                <p>4.2.1. Получить доступ к использованию <strong>Ресурсов Елены Корневой</strong> после соблюдения требований о регистрации. После соблюдения требований об оплате получить полный доступ к Сервисам <strong>Ресурсов Елены Корневой</strong>&nbsp;.</p>
                <p>4.2.2. Задавать любые вопросы, относящиеся к услугам <strong>Ресурсов Елены Корневой</strong>&nbsp;и его работоспособности через формы обратной связи.</p>
                <p>4.2.3. Пользоваться <strong>Ресурсами Елены Корневой</strong>&nbsp;исключительно в целях и порядке, предусмотренных Соглашением.</p>
                <p>4.3. <strong>Пользователь</strong> ресурсов обязуется:</p>
                <p>4.3.1. Предоставлять по запросу <strong>Администрации </strong>&nbsp;дополнительную информацию, которая имеет непосредственное отношение к предоставляемым услугам &nbsp;<strong>Ресурсов Елены Корневой</strong>&nbsp;.</p>
                <p>4.3.2. Соблюдать имущественные и неимущественные права авторов и иных правообладателей при использовании <strong>Ресурсов Елены Корневой</strong>.</p>
                <p>4.3.3. Не предпринимать действий, которые могут рассматриваться как нарушающие нормальную работу <strong>Ресурсов Елены Корневой</strong>&nbsp;</p>
                <p>4.3.4. Не распространять с использованием <strong>Ресурсов Елены Корневой </strong>любую конфиденциальную и охраняемую законодательством информацию о физических либо юридических лицах.</p>
                <p>4.3.5. Избегать любых действий, в результате которых может быть нарушена конфиденциальность охраняемой законодательством информации.</p>
                <p>4.3.6. Не использовать <strong>Ресурсы Елены Корневой </strong>для распространения информации рекламного характера, иначе как с согласия <strong>Администрации.</strong></p>
                <p>4.3.7. Не использовать сервисы&nbsp; <strong>Ресурсов Елены Корневой </strong>с целью:</p>
                <p>4.3.7.1. загрузки контента, который является незаконным, нарушает любые права третьих лиц; пропагандирует насилие, жестокость, ненависть и (или) дискриминацию по расовому, национальному, половому, религиозному, социальному признакам; содержит недостоверные сведения и (или) оскорбления в адрес конкретных лиц, организаций, органов власти.</p>
                <p>4.3.7.2. побуждения к совершению противоправных действий, а также содействия лицам, действия которых направлены на нарушение ограничений и запретов.</p>
                <p>4.3.7.3. нарушения прав несовершеннолетних лиц и (или) причинение им вреда в любой форме.</p>
                <p>4.3.7.4. ущемления прав меньшинств.</p>
                <p>4.3.7.5. представления себя за другого человека или представителя организации и (или) сообщества без достаточных на то прав, в том числе за сотрудников данного Сайта.</p>
                <p>&nbsp;</p>
                <p>4.4. Пользователю запрещается:</p>
                <p>&nbsp;</p>
                <p>4.4.1. Использовать любые устройства, программы, процедуры, алгоритмы и методы, автоматические устройства или эквивалентные ручные процессы для доступа, приобретения, копирования или отслеживания содержания <strong>Ресурсов Елены Корневой</strong>;</p>
                <p>4.4.2. Нарушать надлежащее функционирование <strong>Ресурсов Елены Корневой</strong>;</p>
                <p>4.4.3. Любым способом обходить навигационную структуру <strong>Ресурсов Елены Корневой</strong> для получения или попытки получения любой информации, документов или материалов любыми средствами, которые специально не представлены сервисами <strong>Ресурсов Елены Корневой</strong>;</p>
                <p>4.4.4. Несанкционированный доступ к функциям <strong>Ресурсов Елены Корневой</strong>, любым другим системам или сетям, относящимся к <strong>Ресурсам Елены Корневой</strong>, а также к любым услугам, предлагаемым на <strong>Ресурсах Елены Корневой</strong>;</p>
                <p>4.4.5. Нарушать систему безопасности или аутентификации на <strong>Ресурсах Елены Корневой</strong> или в любой сети, относящейся к <strong>Ресурсам Елены Корневой.</strong></p>
                <p>4.4.6. Выполнять обратный поиск, отслеживать или пытаться отслеживать любую информацию о любом другом Пользователе <strong>Ресурсов Елены Корневой</strong>.</p>
                <p>4.4.7. Использовать <strong>Ресурсы Елены Корневой</strong> и их Содержание в любых целях, запрещенных законодательством, а также подстрекать к любой незаконной деятельности или другой деятельности, нарушающей права <strong>Ресурсов Елены Корневой</strong> или других лиц.</p>
                <p>&nbsp;</p>
                <p>5. ИСПОЛЬЗОВАНИЕ РЕСУРСОВ</p>
                <p>&nbsp;</p>
                <p>5.1. <strong>Ресурсы Елены Корневой</strong> и Содержание, входящее в состав <strong>Ресурсы </strong>&nbsp;принадлежат и управляются Администрацией.</p>
                <p>5.2. Содержание <strong>Ресурсов Елены Корневой </strong>не может быть скопировано, опубликовано, воспроизведено, передано или распространено любым способом, а также размещено в глобальной сети &laquo;Интернет&raquo; без предварительного письменного согласия Администрации.</p>
                <p>5.3. Содержание <strong>Ресурсов Елены Корневой </strong>защищено авторским правом, законодательством о товарных знаках, а также другими правами, связанными с интеллектуальной собственностью, и законодательством о недобросовестной конкуренции.</p>
                <p>5.4. Приобретение доступа к частичному и/или полному курсу обучения, предлагаемого на <strong>Ресурсах Елены Корневой</strong>, требует в обязательном порядке создания учётной записи Пользователя.</p>
                <p>5.5. Пользователь несет персональную ответственность за сохранение конфиденциальности информации учётной записи, включая пароль, а также за всю без исключения деятельность, которая ведётся от имени Пользователя учётной записи.</p>
                <p>5.6. Пользователь должен незамедлительно уведомить Администрацию&nbsp; о несанкционированном использовании его учётной записи или пароля или любом другом нарушении системы безопасности.</p>
                <p>5.7. Информация, размещаемая на <strong>Ресурсах&nbsp; Елены Корневой </strong>не должна истолковываться как изменение настоящего Соглашения.</p>
                <p>&nbsp;</p>
                <p>6. ОТВЕТСТВЕННОСТЬ</p>
                <p>&nbsp;</p>
                <p>6.1. Любые убытки, которые Пользователь может понести в случае умышленного или неосторожного нарушения любого положения настоящего Соглашения, а также вследствие несанкционированного доступа к коммуникациям другого Пользователя, Администрацией не возмещаются.</p>
                <p>6.2. Администрация <strong>Ресурсов Елены Корневой</strong> не несет ответственности за:</p>
                <p>6.2.1. Задержки или сбои в процессе совершения операции, возникшие вследствие непреодолимой силы, а также любого случая неполадок в телекоммуникационных, компьютерных, электрических и иных смежных системах.</p>
                <p>6.2.2. Действия систем переводов, банков, платежных систем и за задержки связанные с их работой.</p>
                <p>6.2.3. Надлежащее функционирование <strong>Ресурсов Елены Корневой&nbsp;</strong> в случае, если Пользователь не имеет необходимых технических средств для его использования, а также не несет никаких обязательств по обеспечению пользователей такими средствами.</p>
                <p>&nbsp;</p>
                <p>7. НАРУШЕНИЕ УСЛОВИЙ ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ</p>
                <p>&nbsp;</p>
                <p>7.1. Администрация&nbsp; вправе раскрыть любую собранную о Пользователе Ресурсов информацию, если раскрытие необходимо в связи с расследованием или жалобой в отношении неправомерного использования <strong>Ресурсов Елены Корневой</strong> либо для установления (идентификации) Пользователя, который может нарушать или вмешиваться в права Администрации или в права других Пользователей <strong>Ресурсов Елены Корневой.</strong></p>
                <p>7.2. Администрация имеет право раскрыть любую информацию о Пользователе, которую посчитает необходимой для выполнения положений действующего законодательства или судебных решений, обеспечения выполнения условий настоящего Соглашения, защиты прав или безопасности название организации, Пользователей.</p>
                <p>7.3. Администрация&nbsp; вправе без предварительного уведомления Пользователя прекратить и (или) заблокировать доступ к <strong>Ресурсам Елены Корневой</strong>, если Пользователь нарушил настоящее Соглашение или содержащиеся в иных документах условия пользования <strong>Ресурсов Елены Корневой</strong>, а также в случае прекращения действия <strong>Ресурсов Елены Корневой </strong>либо по причине технической неполадки или проблемы.</p>
                <p>7.4. Администрация не несет ответственности перед Пользователем или третьими лицами за прекращение доступа к <strong>Ресурсам Елены Корневой</strong> в случае нарушения Пользователем любого положения настоящего Соглашения или иного документа, содержащего условия пользования <strong>Ресурсов Елены Корневой</strong>.</p>
                <p>&nbsp;</p>
                <p>8. РАЗРЕШЕНИЕ СПОРОВ</p>
                <p>&nbsp;</p>
                <p>8.1. В случае возникновения любых разногласий или споров между Сторонами настоящего Соглашения обязательным условием до обращения в суд является предъявление претензии (письменного предложения о добровольном урегулировании спора).</p>
                <p>8.2. Получатель претензии в течение 30 календарных дней со дня ее получения, письменно уведомляет заявителя претензии о результатах рассмотрения претензии.</p>
                <p>8.3. При невозможности разрешить спор в добровольном порядке любая из Сторон вправе обратиться в суд за защитой своих прав, которые предоставлены им действующим законодательством Российской Федерации.</p>
                <p>8.4. Любой иск в отношении условий использования Сайта должен быть предъявлен в течение срок после возникновения оснований для иска, за исключением защиты авторских прав на охраняемые в соответствии с законодательством материалы Сайта. При нарушении условий данного пункта любой иск или основания для иска погашаются исковой давностью.</p>
                <p>&nbsp;</p>
                <p>9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</p>
                <p>&nbsp;</p>
                <p>9.1. Администрация сайта не принимает встречные предложения от Пользователя относительно изменений настоящего Пользовательского соглашения.</p>
                <p>9.2. Отзывы Пользователя, размещенные на <strong>Ресурсах&nbsp; Елены Корневой</strong>, не являются конфиденциальной информацией и могут быть использованы Администрацией сайта без ограничений.</p>
            </Container>
        </ThemeProvider>
    );
}
