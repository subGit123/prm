const {base, de, de_CH, ko, en, faker, Faker} = require('@faker-js/faker');

const customLocale = {
  title: '나의 커스텀 로케일',
  internet: {
    domainsuffix: ['test'],
  },
};

const customFaker = new Faker({
  locale: [customLocale, de_CH, de, en, base, ko],
});

// faker.범주.내용
console.log(faker.internet.username());
console.log(faker.internet.password());
