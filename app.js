// t.me/mmoney_pro_bot

const TelegramBot = require('node-telegram-bot-api');

const token = '8196653922:AAGbG5oui4osB51y6rF44_fs07gUrUbgWa0';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;


    async function bodyBot() {
        const homeButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'О кампании', callback_data: 'homeCompany' }],
                    [{ text: 'Заказать звонок', callback_data: 'phoneCompany' }],
                    [{ text: 'Вызвать менеджера', callback_data: 'managerSend' }]
                ]
            })
        }

        const startBot = async () => {
            if (text === '/start') {
                await bot.sendPhoto(chatId, './img/white-1.jpg');
                await bot.sendMessage(chatId, 'Добро пожаловать на страницу лучше брокера в Москве \n\n Выберете интересующий вас раздел', homeButton);
            }
        }
        startBot()


        // Функция работы кнопок
        async function clickButtonOption() {

            bot.on('callback_query', async msg => {
                const data = msg.data;
                const chatId = msg.message.chat.id;
                const text = msg.text;


                // Страница / Блок - О нас 
                async function homeCompanyOption() {

                    // Основной контент блока - О нас

                    async function homeCop() {
                        const homeCompany = 'homeCompany';

                        const startHome = async () => {
                            if (data === homeCompany) {
                                await bot.sendSticker(chatId, 'https://cdn.tlgrm.ru/stickers/8e9/fcf/8e9fcf41-0358-4a8d-9431-a0df9eac2796/192/3.webp')
                                await bot.sendMessage(chatId, '🏢 Кредитный брокер в Москве 🏢 \n Мы помогаем вам решить финансовые вопросы быстро и просто! 🔍 \n Будь то ипотека, потребительский кредит или рефинансирование, \n команда экспертов подберет лучшие условия специально для вас. 💼 \n Обратитесь к нам и сделайте первый шаг к своим целям! 🎯💰', homeButton);
                            }
                        }
                        startHome()
                    }
                    homeCop()


                    // контент -  Заказать звонок

                    async function formHome() {

                        const startForm = async () => {
                            const phoneCompany = 'phoneCompany';

                            if(data === phoneCompany){
                                await bot.sendSticker(chatId, 'https://cdn.tlgrm.ru/stickers/8e9/fcf/8e9fcf41-0358-4a8d-9431-a0df9eac2796/192/5.webp')
                                await bot.sendMessage(chatId, 'Мы получили вашу заявку, \nпожалуйста напишите сюда свое имя и фамилию, \nа так же номер телефона если хотите что б мы позвонили вам на номер', homeButton);
                            }
                        }
                        startForm()
                    }
                    formHome()



                    // контент -  Вызвать менеджера

                    async function formPhone() {

                        const startPhone = async () => {
                            const managerSend = 'managerSend';

                            if(data === managerSend){
                                await bot.sendSticker(chatId, 'https://cdn.tlgrm.ru/stickers/8e9/fcf/8e9fcf41-0358-4a8d-9431-a0df9eac2796/192/2.webp')
                                await bot.sendMessage(chatId, 'Наш менеджер свяжеться с вами в ближайшее время!', homeButton);
                            }
                        }
                        startPhone()
                    }
                    formPhone()
                }

                homeCompanyOption()
            })

        }
        clickButtonOption()
    }
    bodyBot()


})