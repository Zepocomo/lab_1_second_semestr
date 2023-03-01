class SpaceStation {
    constructor(name, location) {
      this.name = name;
      this.location = location;
      this.cargo = [];
    }
  
    dock(cargo) {
      this.cargo.push(cargo);
    }
  
    undock(cargo) {
      const index = this.cargo.indexOf(cargo);
      if (index !== -1) {
        this.cargo.splice(index, 1);
      }
    }
  }
  
  class Planet {
    constructor(name, distanceFromSun) {
      this.name = name;
      this.distanceFromSun = distanceFromSun;
      this.cargo = [];
    }
  
    receiveCargo(cargo) {
      this.cargo.push(cargo);
    }
  }
  
  class Cargo {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }
  }
  
  class DeliveredCargo {
    constructor(cargo, planet) {
      this.cargo = cargo;
      this.planet = planet;
    }
  }
  
  class SpaceSystem {
    constructor() {
      this.stations = [];
      this.planets = [];
      this.cargo = [];
      this.delivered = [];
    }
  
    addStation(station) {
      this.stations.push(station);
    }
  
    editStation(stationName, newStationName, newLocation) {
      const station = this.findStation(stationName);
      if (station) {
        station.name = newStationName;
        station.location = newLocation;
      }
    }
  
    removeStation(stationName) {
      const index = this.stations.findIndex((station) => station.name === stationName);
      if (index !== -1) {
        this.stations.splice(index, 1);
      }
    }
  
    findStation(stationName) {
      return this.stations.find((station) => station.name === stationName);
    }
  
    addPlanet(planet) {
      this.planets.push(planet);
    }
  
    editPlanet(planetName, newPlanetName, newDistanceFromSun) {
      const planet = this.findPlanet(planetName);
      if (planet) {
        planet.name = newPlanetName;
        planet.distanceFromSun = newDistanceFromSun;
      }
    }
  
    removePlanet(planetName) {
      const index = this.planets.findIndex((planet) => planet.name === planetName);
      if (index !== -1) {
        this.planets.splice(index, 1);
      }
    }
  
    findPlanet(planetName) {
      return this.planets.find((planet) => planet.name === planetName);
    }
  
    addCargo(cargo) {
      this.cargo.push(cargo);
    }
  
    editCargo(cargoName, newCargoName, newWeight) {
      const cargo = this.findCargo(cargoName);
      if (cargo) {
        cargo.name = newCargoName;
        cargo.weight = newWeight;
      }
    }
  
    removeCargo(cargoName) {
      const index = this.cargo.findIndex((cargo) => cargo.name === cargoName);
      if (index !== -1) {
        this.cargo.splice(index, 1);
      }
    }
  
    findCargo(cargoName) {
      return this.cargo.find((cargo) => cargo.name === cargoName);
    }
  
    deliverCargo(cargoName, planetName) {
        const cargo = this.findCargo(cargoName);
        const planet = this.findPlanet(planetName);
        if (cargo && planet) {
          planet.receiveCargo(cargo);
          this.delivered.push(new DeliveredCargo(cargo, planet));
        }
    }}

// Створюємо нову систему космічних станцій
const spaceSystem = new SpaceSystem();

// Створюємо дві космічні станції
const station1 = new SpaceStation("Station 1", "Earth");
const station2 = new SpaceStation("Station 2", "Mars");

// Створюємо дві планети
const planet1 = new Planet("Planet 1", 100);
const planet2 = new Planet("Planet 2", 200);

// Створюємо два вантажі
const cargo1 = new Cargo("Cargo 1", 50);
const cargo2 = new Cargo("Cargo 2", 100);

// Додаємо космічні станції до системи
spaceSystem.addStation(station1);
spaceSystem.addStation(station2);

// Редагуємо атрибути станції "Station 1"
spaceSystem.editStation("Station 1", "Station One", "Moon");

// Видаляємо станцію "Station 2"
spaceSystem.removeStation("Station 2");

// Додаємо планети до системи
spaceSystem.addPlanet(planet1);
spaceSystem.addPlanet(planet2);

// Редагуємо атрибути планети "Planet 1"
spaceSystem.editPlanet("Planet 1", "Planet One", 150);

// Видаляємо планету "Planet 2"
spaceSystem.removePlanet("Planet 2");

// Додаємо вантажі до системи
spaceSystem.addCargo(cargo1);
spaceSystem.addCargo(cargo2);

// Редагуємо атрибути вантажу "Cargo 1"
spaceSystem.editCargo("Cargo 1", "Cargo One", 75);

// Видаляємо вантаж "Cargo 2"
spaceSystem.removeCargo("Cargo 2");

// Доставляємо вантаж "Cargo One" на планету "Planet One"
spaceSystem.deliverCargo("Cargo One", "Planet One");

// Виводимо систему космічних станцій у консоль
console.log(spaceSystem);