'use strict';

// SVG symbols use currentColor and never depend on an emoji font.
function createIcon(name) {
 const namespace = 'http://www.w3.org/2000/svg';
 const icon = document.createElementNS(namespace, 'svg');
 icon.setAttribute('class', 'icon icon-' + name);
 icon.setAttribute('viewBox', '0 0 24 24');
 icon.setAttribute('width', '24'); icon.setAttribute('height', '24');
 icon.setAttribute('aria-hidden', 'true'); icon.setAttribute('focusable', 'false');
 const use = document.createElementNS(namespace, 'use');
 use.setAttribute('href', '#icon-' + name); icon.append(use);
 return icon;
}
function setIconLabel(element, text, icon = 'arrow-up-right') {
 element.replaceChildren(document.createTextNode(text + ' '), createIcon(icon));
}
function normalizeSearch(text) {
 return text.normalize('NFC').toLocaleLowerCase('ru').replaceAll('ё', 'е');
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Открыть меню'); document.body.classList.remove('menu-open'); }
menuButton.addEventListener('click', () => { const open = navigation.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню'); document.body.classList.toggle('menu-open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
const branches = [{"id": "dostyk", "address": "улица Достык, 1а", "short": "Достык, 1а", "district": "Есильский район", "phone": "77029062211", "display": "+7 702 906 22 11", "wa": "77029062211", "map": "70000001051064347"}, {"id": "kenesary", "address": "улица Кенесары, 47", "short": "Кенесары, 47", "district": "Район Байконыр", "phone": "77753550000", "display": "+7 775 355 00 00", "wa": "77753550000", "map": "70000001036109403"}, {"id": "mangilik", "address": "проспект Мангилик Ел, 28", "short": "Мангилик Ел, 28", "district": "Есильский район", "phone": "77479177100", "display": "+7 747 917 71 00", "wa": "77479177100", "map": "70000001068418914"}, {"id": "zhenis", "address": "проспект Женис, 16", "short": "Женис, 16", "district": "Район Сарыарка", "phone": "77029177071", "display": "+7 702 917 70 71", "wa": "77029177071", "map": "70000001043345020"}, {"id": "turan", "address": "проспект Туран, 22/1", "short": "Туран, 22/1", "district": "Район Нура", "phone": "77750577744", "display": "+7 775 057 77 44", "wa": "77750577744", "map": "70000001100320206"}, {"id": "ulydala", "address": "проспект Улы Дала, 58/1", "short": "Улы Дала, 58/1", "district": "Есильский район", "phone": "77020000249", "display": "+7 702 000 02 49", "wa": "77711017199", "map": "70000001114348393"}];
const branchDetails = {"dostyk": {"rating": "4,9", "count": "2 302", "features": ["КТ и прицельные снимки", "Лечение под микроскопом взрослым", "Лечение во сне для детей"], "access": "Пандус и доступный вход указаны в 2ГИС.", "travel": "Улица Достык, 1а. Вход и удобный маршрут смотрите на карте филиала."}, "kenesary": {"rating": "4,9", "count": "2 132", "features": ["КЛКТ и прицельные снимки", "Микроскоп для взрослых и детей", "Лечение во сне для взрослых и детей"], "access": "Подъёмник и доступный вход указаны в 2ГИС.", "travel": "Остановка «Школа-гимназия № 31» — около 100 м."}, "mangilik": {"rating": "4,9", "count": "1 200", "features": ["Панорамный снимок ОПТГ", "КЛКТ и прицельные снимки", "Микроскоп и лечение во сне для взрослых и детей"], "access": "В карточке 2ГИС указан пандус.", "travel": "Проспект Мангилик Ел, 28, нежилое помещение № 9. Вход отмечен в 2ГИС."}, "zhenis": {"rating": "5,0", "count": "1 316", "features": ["Приём гнатолога", "КТ и прицельные снимки", "Лечение во сне для взрослых и детей"], "access": "Условия доступного входа уточните у администратора.", "travel": "Остановка «Департамент Юстиции» — около 50 м."}, "turan": {"rating": "4,9", "count": "637", "features": ["Приём гнатолога", "КЛКТ, лечение под микроскопом", "Лечение во сне для взрослых и детей"], "access": "В 2ГИС указана бесплатная парковка. Условия въезда уточните перед визитом.", "travel": "Остановка «ТРЦ Сарыарка» — около 200 м."}, "ulydala": {"rating": "5,0", "count": "155", "features": ["КТ и прицельные снимки", "Микроскоп для взрослых и детей", "Лечение во сне для детей"], "access": "Условия парковки и доступного входа уточните у администратора.", "travel": "Проспект Улы Дала, 58/1. Точный вход и маршрут — в карточке 2ГИС."}};
const doctors = [{"id": "39627", "name": "Дуйсенбиев Нуркасым Смайлович", "role": "Стоматолог, челюстно-лицевой хирург", "photo": "assets/doctors/39627.jpg", "source": "https://ydoc.kz/astana/vrach/39627-duysenbiev/", "branches": ["dostyk"], "category": "surgery"}, {"id": "12640", "name": "Ергазиева Айжан Муратовна", "role": "Стоматолог", "photo": "assets/doctors/12640.jpg", "source": "https://ydoc.kz/astana/vrach/12640-ergazieva/", "branches": ["dostyk", "kenesary"], "category": "therapy"}, {"id": "74980", "name": "Жапар Кайсар Ажбанович", "role": "Стоматолог, стоматолог-ортопед, стоматолог-хирург", "photo": "assets/doctors/74980.jpg", "source": "https://ydoc.kz/astana/vrach/74980-zhapar/", "branches": ["dostyk"], "category": "surgery"}, {"id": "12642", "name": "Жумагулова Райхан Дулатовна", "role": "Детский стоматолог", "photo": "assets/doctors/12642.jpg", "source": "https://ydoc.kz/astana/vrach/12642-zhumagulova/", "branches": ["dostyk"], "category": "kids"}, {"id": "74984", "name": "Кабдыганый Нурсултан Кажыбекович", "role": "Детский ортодонт, стоматолог-ортодонт", "photo": "assets/doctors/74984.jpg", "source": "https://ydoc.kz/astana/vrach/74984-kabdyganyy/", "branches": ["dostyk", "kenesary"], "category": "ortho"}, {"id": "39628", "name": "Каменов Арман Амантаевич", "role": "Стоматолог-ортодонт, стоматолог-имплантолог, стоматолог-хирург", "photo": "assets/doctors/39628.jpg", "source": "https://ydoc.kz/astana/vrach/39628-kamenov/", "branches": ["dostyk"], "category": "ortho"}, {"id": "39620", "name": "Киматов Суйиндик Наушаевич", "role": "Стоматолог, стоматолог-хирург", "photo": "assets/doctors/39620.jpg", "source": "https://ydoc.kz/astana/vrach/39620-kimatov/", "branches": ["dostyk", "mangilik"], "category": "surgery"}, {"id": "39608", "name": "Аташбек Саржан Ералиевич", "role": "Стоматолог-имплантолог, стоматолог-ортопед, стоматолог-хирург", "photo": "assets/doctors/39608.jpg", "source": "https://ydoc.kz/astana/vrach/39608-atashbek/", "branches": ["kenesary"], "category": "surgery"}, {"id": "39606", "name": "Абулова Надира Рустамовна", "role": "Стоматолог", "photo": "assets/doctors/39606.jpg", "source": "https://ydoc.kz/astana/vrach/39606-abdulova/", "branches": ["kenesary"], "category": "therapy"}, {"id": "12647", "name": "Кеулимжаева Лейла Жаксылыковна", "role": "Пародонтолог", "photo": "assets/doctors/12647.jpg", "source": "https://ydoc.kz/astana/vrach/12647-keulimzhaeva/", "branches": ["kenesary", "zhenis"], "category": "therapy"}, {"id": "72983", "name": "Шукжанов Женис Амангельдинович", "role": "Стоматолог, стоматолог-эндодонтист", "photo": "assets/doctors/72983.jpg", "source": "https://ydoc.kz/astana/vrach/72983-shukzhanov/", "branches": ["zhenis"], "category": "therapy"}, {"id": "39598", "name": "Абдувалиев Асан Усманович", "role": "Стоматолог-ортодонт", "photo": "assets/doctors/39598.jpg", "source": "https://ydoc.kz/astana/vrach/39598-abduvaliev/", "branches": ["zhenis"], "category": "ortho"}, {"id": "39601", "name": "Тажимат Барно Шавкатовна", "role": "Детский стоматолог", "photo": "assets/doctors/39601.jpg", "source": "https://ydoc.kz/astana/vrach/39601-tazhimat/", "branches": ["zhenis"], "category": "kids"}, {"id": "39618", "name": "Абдалиева Гульжан Абдалиевна", "role": "Стоматолог, детский стоматолог", "photo": "assets/doctors/39618.jpg", "source": "https://ydoc.kz/astana/vrach/39618-abdalieva/", "branches": ["mangilik"], "category": "kids"}, {"id": "39617", "name": "Бердешев Жанибек Казбекович", "role": "Стоматолог-ортодонт", "photo": "assets/doctors/39617.jpg", "source": "https://ydoc.kz/astana/vrach/39617-berdeshev/", "branches": ["mangilik"], "category": "ortho"}];
const branchSelect = document.querySelector("#branch");
const services = {
 therapy: ['Лечение зубов', 'Диагностика и лечение кариеса, лечение корневых каналов, восстановление повреждённых зубов. По показаниям лечение проводится с использованием микроскопа.', 'Врач предложит варианты после осмотра. Стоимость зависит от состояния зуба и объёма лечения.'],
 implant: ['Имплантация', 'Восстановление отсутствующих зубов с помощью имплантатов и последующего протезирования. Консультация включает обсуждение вариантов и этапов лечения.', 'Возможность имплантации, объём диагностики и сроки определяет врач индивидуально.'],
 ortho: ['Исправление прикуса', 'Консультация ортодонта и коррекция положения зубов с помощью брекет-систем. Врач оценивает прикус и обсуждает подходящий план лечения.', 'Вид конструкции, срок лечения и стоимость уточняются после диагностики.'],
 aesthetic: ['Эстетика улыбки', 'Восстановление формы и внешнего вида зубов: художественная реставрация, виниры и коронки. Материал и метод подбираются после оценки состояния зубов.', 'На консультации можно обсудить желаемый результат и доступные варианты.'],
 hygiene: ['Гигиена и профилактика', 'Профессиональная гигиена полости рта, удаление зубных отложений и рекомендации по домашнему уходу. Также в клинике доступно лечение дёсен.', 'Состав процедуры и периодичность визитов определяет специалист.'],
 kids: ['Детская стоматология', 'Знакомство со стоматологом, профилактика и лечение зубов у детей. При записи сообщите возраст ребёнка и причину обращения.', 'Лечение во сне проводится по показаниям после консультации стоматолога и анестезиолога.']
};
const dialog = document.querySelector('#info-dialog');
const dialogBook = document.querySelector('#dialog-book');
const serviceSelect = document.querySelector('#service');
let activeService = '';
function showDialog(title, description, note, privacy = false) {
 document.querySelector('#dialog-title').textContent = title;
 document.querySelector('#dialog-description').textContent = description;
 document.querySelector('#dialog-note').textContent = note;
 document.querySelector('#dialog-label').textContent = privacy ? 'ВАШИ ДАННЫЕ' : 'УСЛУГИ ONE DENT';
 dialogBook.hidden = privacy;
 dialogBook.style.display = privacy ? 'none' : '';
 dialog.showModal(); document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => { const service = services[button.dataset.service]; activeService = service[0]; showDialog(service[0], service[1], service[2] + ' Выбран филиал: ' + currentBranch().short + '. Доступность услуги на нужную дату уточните при записи.'); }));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
dialogBook.addEventListener('click', () => { serviceSelect.value = activeService; doctorChoice.value = ''; document.querySelector('#form-status').replaceChildren(); dialog.close(); });
document.querySelectorAll('[data-select]').forEach(link => link.addEventListener('click', () => { serviceSelect.value = link.dataset.select; doctorChoice.value = ''; document.querySelector('#form-status').replaceChildren(); }));
document.querySelector('#privacy-button').addEventListener('click', () => showDialog('Конфиденциальность', 'Эта форма не отправляет и не сохраняет ваше имя на сервере сайта. После нажатия кнопки имя, выбранный филиал, специалист и услуга будут переданы в WhatsApp в составе ссылки с подготовленным текстом. Сообщение отправляете вы сами.', 'На сайте нет аналитических счётчиков. В браузере сохраняется только выбранный филиал, чтобы восстановить его при следующем визите. Имя и параметры обращения не сохраняются. Шрифт загружается с Google Fonts: при загрузке браузер обращается к серверам Google. При переходе в WhatsApp, Instagram или 2ГИС действуют правила соответствующего сервиса. Вопросы об обработке переписки клиникой можно уточнить по телефону +7 702 906 22 11.', true));
const bookingForm = document.querySelector('#booking-form');
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', () => { nameInput.setCustomValidity(''); document.querySelector('#form-status').replaceChildren(); });
bookingForm.addEventListener('submit', event => {
 event.preventDefault();
 const name = nameInput.value.trim();
 if (!name) { nameInput.setCustomValidity('Пожалуйста, укажите имя.'); nameInput.reportValidity(); return; }
 const selectedBranch = branches.find(branch => branch.id === branchSelect.value);
 const doctor = doctors.find(item => item.id === document.querySelector('#doctor-choice').value);
 const doctorText = doctor ? ` Желаемый специалист: ${doctor.name}.` : '';
 const message = `Здравствуйте! Меня зовут ${name}. Хочу записаться в One Dent, ${selectedBranch.address}. Интересует: ${serviceSelect.value}.${doctorText} Подскажите, пожалуйста, стоимость и свободное время.`;
 const url = `https://wa.me/${selectedBranch.wa}?text=${encodeURIComponent(message)}`;
 const status = document.querySelector('#form-status');
 status.replaceChildren(document.createTextNode('Сообщение подготовлено. Если WhatsApp не открылся, '));
 const link = document.createElement('a'); link.href = url; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'перейдите по ссылке'; status.append(link, document.createTextNode('. Запись подтвердит администратор.'));
 window.open(url, '_blank', 'noopener,noreferrer');
});
document.querySelector('#year').textContent = new Date().getFullYear();

function selectBranch(id) {
 const branch = branches.find(item => item.id === id);
 if (!branch) return;
 branchSelect.value = id;
 document.querySelectorAll('[data-branch-card]').forEach(card => card.classList.toggle('selected', card.dataset.branchCard === id));
 document.querySelectorAll('[data-branch]').forEach(button => { const selected = button.dataset.branch === id; button.setAttribute('aria-pressed', String(selected)); setIconLabel(button, selected ? 'Выбран' : 'Выбрать', selected ? 'check' : 'arrow-up-right'); });
 document.querySelector('#contact-address').textContent = 'Астана, ' + branch.address;
 document.querySelector('#contact-district').textContent = branch.district;
 const phoneLink = document.querySelector('.contact-phone'); phoneLink.href = 'tel:+' + branch.phone; phoneLink.textContent = branch.display;
 const bookingPhone = document.querySelector('.appointment-phone'); bookingPhone.href = phoneLink.href; setIconLabel(bookingPhone, branch.display);
 document.querySelector('#contact-whatsapp').href = 'https://wa.me/' + branch.wa;
 const map = document.querySelector('.map-card'); map.href = 'https://2gis.kz/astana/firm/' + branch.map; map.setAttribute('aria-label', 'Открыть One Dent, ' + branch.short + ', в 2ГИС');
 document.querySelector('#map-address').textContent = branch.short;
 document.querySelector('#map-street').textContent = branch.address;
 const status = document.querySelector('#branch-status'); status.firstChild.textContent = 'Выбран филиал: ' + branch.short + '. ';
 document.querySelector('#form-status').replaceChildren();
 updateBranchContent(branch);
}
document.querySelectorAll('[data-branch]').forEach(button => button.addEventListener('click', () => selectBranch(button.dataset.branch)));
branchSelect.addEventListener('change', () => selectBranch(branchSelect.value));

// Branch-specific content and the published doctor directory.
const rosterSources = {
 dostyk: 'https://ydoc.kz/astana/lpu/908-one-dent/vrachi/',
 kenesary: 'https://ydoc.kz/astana/lpu/4193-stomatologiya-one-dent-na-kenesary/vrachi/',
 mangilik: 'https://ydoc.kz/astana/lpu/4194-stomatologiya-one-dent-na-mangilik-el/',
 zhenis: 'https://ydoc.kz/astana/lpu/4196-stomatologiya-one-dent-na-prospekte-zhenis/vrachi/'
};
let doctorScope = 'branch';
const doctorChoice = document.querySelector('#doctor-choice');
const doctorSearch = document.querySelector('#doctor-search');
const doctorSpecialty = document.querySelector('#doctor-specialty');
function currentBranch() { return branches.find(branch => branch.id === branchSelect.value); }
function createElement(tag, className, content) {
 const element = document.createElement(tag);
 if (className) element.className = className;
 if (content) element.textContent = content;
 return element;
}
function doctorMatchesCategory(doctor, category) {
 const role = normalizeSearch(doctor.role);
 if (category === 'surgery') return /хирург|имплантолог|ортопед/.test(role);
 if (category === 'ortho') return role.includes('ортодонт');
 if (category === 'kids') return role.includes('детский');
 return doctor.category === category;
}
function renderDoctors() {
 const branch = currentBranch();
 const search = normalizeSearch(doctorSearch.value.trim());
 const category = doctorSpecialty.value;
 const visibleDoctors = doctors.filter(doctor => (doctorScope === 'network' || doctor.branches.includes(branch.id)) && (category === 'all' || doctorMatchesCategory(doctor, category)) && normalizeSearch(doctor.name + ' ' + doctor.role).includes(search));
 const grid = document.querySelector('#doctor-grid');
 grid.replaceChildren();
 document.querySelector('#doctor-results').textContent = (doctorScope === 'branch' ? branch.short : 'Вся сеть One Dent') + ' · найдено: ' + visibleDoctors.length;
 document.querySelectorAll('[data-scope]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.scope === doctorScope)));
 for (const doctor of visibleDoctors) {
  const card = createElement('article', 'doctor-card');
  const top = createElement('div', 'doctor-card-top');
  const photo = createElement('img'); photo.src = doctor.photo; photo.alt = doctor.name; photo.width = 112; photo.height = 112; photo.loading = 'eager';
  const ornament = createElement('span', 'doctor-card-symbol'); ornament.append(createIcon('spark')); top.append(photo, ornament);
  const name = createElement('h3', '', doctor.name);
  const role = createElement('p', 'doctor-role', doctor.role);
  const addresses = createElement('div', 'doctor-addresses');
  doctor.branches.forEach(id => addresses.append(createElement('span', '', branches.find(item => item.id === id).short)));
  const footer = createElement('div', 'doctor-card-footer');
  const book = createElement('a', 'doctor-book'); setIconLabel(book, 'Записаться'); book.href = '#appointment';
  book.addEventListener('click', () => {
   if (!doctor.branches.includes(currentBranch().id)) selectBranch(doctor.branches[0]);
   doctorChoice.value = doctor.id;
   serviceSelect.value = {surgery:'Консультация стоматолога',ortho:'Исправление прикуса',kids:'Детская стоматология',therapy:'Консультация стоматолога'}[doctor.category];
   document.querySelector('#form-status').replaceChildren();
  });
  const source = createElement('a', 'doctor-profile'); setIconLabel(source, 'Профиль'); source.href = doctor.source; source.target = '_blank'; source.rel = 'noopener'; source.setAttribute('aria-label', 'Профиль: ' + doctor.name);
  footer.append(book, source); card.append(top, name, role, addresses, footer); grid.append(card);
 }
 const empty = document.querySelector('#doctor-empty'); empty.hidden = visibleDoctors.length > 0;
 const noRoster = doctorScope === 'branch' && !doctors.some(doctor => doctor.branches.includes(branch.id));
 document.querySelector('#doctor-empty-title').textContent = noRoster ? 'Подберём специалиста в этом филиале' : 'По вашему запросу врачей не найдено';
 document.querySelector('#doctor-empty-text').textContent = noRoster ? 'Для филиала ' + branch.short + ' пока нет подтверждённого открытого списка врачей. Напишите администратору: он уточнит состав специалистов и время приёма.' : 'Попробуйте другую фамилию или направление. Также можно посмотреть специалистов всей сети.';
 const source = document.querySelector('#doctor-roster-source'); source.href = doctorScope === 'branch' && rosterSources[branch.id] ? rosterSources[branch.id] : 'https://ydoc.kz/astana/set/227-stomatologiya-_one-dent/';
}
function updateBranchContent(branch) {
 const info = branchDetails[branch.id];
 const faqPhone = document.querySelector('#faq-phone'); faqPhone.href = 'tel:+' + branch.phone; faqPhone.textContent = branch.display;
 document.querySelector('#header-branch').value = branch.id;
 document.querySelector('#top-branch-label').textContent = branch.short;
 document.querySelector('#header-branch-summary').textContent = branch.district + ' · 10:00–22:00';
 const headerPhone = document.querySelector('.header-phone'); headerPhone.href = 'tel:+' + branch.phone; headerPhone.firstChild.textContent = branch.display;
 document.querySelector('#selected-branch-title').textContent = branch.short;
 document.querySelector('#selected-branch-location').textContent = 'Астана · ' + branch.district;
 document.querySelector('#branch-features').replaceChildren(...info.features.map(feature => createElement('li', '', feature)));
 document.querySelector('#branch-travel').textContent = info.travel;
 document.querySelector('#branch-access').textContent = info.access;
 document.querySelector('#branch-info-link').href = 'https://2gis.kz/astana/firm/' + branch.map + '/tab/info';
 const reviewUrl = 'https://2gis.kz/astana/firm/' + branch.map + '/tab/reviews';
 document.querySelectorAll('.hero-trust>a,.reviews-section a').forEach(link => link.href = reviewUrl);
 document.querySelector('#hero-rating').textContent = info.rating;
 setIconLabel(document.querySelector('#hero-rating-caption'), '2ГИС · ' + branch.short);
 document.querySelector('#review-rating').textContent = info.rating;
 document.querySelector('#review-count').textContent = 'Оценок пациентов: ' + info.count;
 document.querySelector('#review-branch').textContent = branch.short + ' · данные на 28.09.2026';
 const previousDoctor = doctorChoice.value;
 doctorChoice.replaceChildren(new Option('Помогите выбрать врача', ''));
 doctors.filter(doctor => doctor.branches.includes(branch.id)).forEach(doctor => doctorChoice.add(new Option(doctor.name, doctor.id)));
 if (doctors.some(doctor => doctor.id === previousDoctor && doctor.branches.includes(branch.id))) doctorChoice.value = previousDoctor;
 doctorScope = 'branch'; doctorSearch.value = ''; doctorSpecialty.value = 'all';
 renderDoctors();
 const schema = document.querySelector('script[type="application/ld+json"]');
 const data = JSON.parse(schema.textContent); data.name = 'One Dent — ' + branch.short; data.telephone = '+' + branch.phone; data.address.streetAddress = branch.address; data.hasMap = 'https://2gis.kz/astana/firm/' + branch.map; schema.textContent = JSON.stringify(data);
 document.title = 'One Dent — ' + branch.short + ' · стоматология в Астане';
 document.querySelector('meta[property="og:title"]').content = document.title;
 document.querySelector('meta[property="og:description"]').content = 'Астана, ' + branch.address + '. Телефон: ' + branch.display;
 document.querySelector('meta[name="description"]').content = 'One Dent, Астана, ' + branch.address + '. Услуги, врачи и запись в выбранный филиал. Телефон: ' + branch.display + '.';
 try { localStorage.setItem('onedent-branch', branch.id); } catch (_) { /* Browsers may disable storage, especially for local files. */ }
}
document.querySelector('#header-branch').addEventListener('change', event => selectBranch(event.target.value));
document.querySelectorAll('[data-scope]').forEach(button => button.addEventListener('click', () => { doctorScope = button.dataset.scope; renderDoctors(); }));
doctorSearch.addEventListener('input', renderDoctors);
doctorSpecialty.addEventListener('change', renderDoctors);
document.querySelector('#reset-doctor-filters').addEventListener('click', () => { doctorScope = 'network'; doctorSearch.value = ''; doctorSpecialty.value = 'all'; renderDoctors(); });
serviceSelect.addEventListener('change', () => document.querySelector('#form-status').replaceChildren());
doctorChoice.addEventListener('change', () => document.querySelector('#form-status').replaceChildren());
let initialBranch = 'dostyk';
try { const saved = localStorage.getItem('onedent-branch'); if (branches.some(branch => branch.id === saved)) initialBranch = saved; } catch (_) {}
selectBranch(initialBranch);

// Keep anchors clear of the sticky header, including larger text and landscape mode.
const headerElement = document.querySelector('.header');
function updateHeaderOffset() {
 document.documentElement.style.setProperty('--header-offset', Math.ceil(headerElement.getBoundingClientRect().height) + 16 + 'px');
}
new ResizeObserver(updateHeaderOffset).observe(headerElement);
updateHeaderOffset();
window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
// The fixed CTA must not cover the form, its controls, or the on-screen keyboard.
const mobileBookingButton = document.querySelector('.mobile-book');
new IntersectionObserver(entries => {
 mobileBookingButton.classList.toggle('is-hidden', entries[0].isIntersecting);
}, { threshold: 0 }).observe(document.querySelector('#appointment'));
document.addEventListener('focusin', event => {
 if (event.target.matches('input, select, textarea')) document.body.classList.add('editing-field');
});
document.addEventListener('focusout', () => {
 requestAnimationFrame(() => document.body.classList.toggle('editing-field', Boolean(document.activeElement?.matches('input, select, textarea'))));
});
