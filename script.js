// Створення об'єкта, який представляє серію Lego Creator
let legoCreatorSeries = {
  seriesName: "Lego Creator",
  sets: [
      {
          setNumber: 31058,
          name: "Mighty Dinosaurs",
          pieces: 174,
          releaseYear: 2017,
          themes: ["Dinosaurs", "3-in-1"],
          price: 14.99,
          ratings: {
              average: 4.8,
              reviews: 530
          }
      },
      {
          setNumber: 31097,
          name: "Townhouse Pet Shop & Café",
          pieces: 969,
          releaseYear: 2019,
          themes: ["Buildings", "3-in-1"],
          price: 79.99,
          ratings: {
              average: 4.7,
              reviews: 210
          }
      },
      {
          setNumber: 31109,
          name: "Pirate Ship",
          pieces: 1264,
          releaseYear: 2020,
          themes: ["Pirates", "3-in-1"],
          price: 99.99,
          ratings: {
              average: 4.9,
              reviews: 320
          }
      },
      {
          setNumber: 31084,
          name: "Pirate Roller Coaster",
          pieces: 923,
          releaseYear: 2018,
          themes: ["Amusement Park", "3-in-1"],
          price: 89.99,
          ratings: {
              average: 4.6,
              reviews: 145
          }
      },
      {
          setNumber: 31120,
          name: "Medieval Castle",
          pieces: 1426,
          releaseYear: 2021,
          themes: ["Castle", "3-in-1"],
          price: 99.99,
          ratings: {
              average: 4.8,
              reviews: 270
          }
      }
  ],
  totalSets: 5,
totalPieces: function() {
  let total = 0;
  for (let i = 0; i < this.sets.length; i++) {
    total += parseInt(this.sets[i].pieces);
  }
  return total;
  }
};

// Виведення інформації про серію Lego Creator
legoCreatorSeries.sets.forEach(set => {
    console.log(`Номер набору: ${set.setNumber}, Назва: ${set.name}, Кількість деталей: ${set.pieces}, Рік випуску: ${set.releaseYear}, Теми: ${set.themes.join(", ")}, Ціна: $${set.price}, Оцінка: ${set.ratings.average}, Відгуків: ${set.ratings.reviews}`);
});
console.log("Назва серії:", legoCreatorSeries.seriesName);
console.log("Загальна кількість наборів:", legoCreatorSeries.totalSets);

// Виведення загальної кількості деталей у всіх наборах
console.log("Загальна кількість деталей у всіх наборах:", legoCreatorSeries.totalPieces());

