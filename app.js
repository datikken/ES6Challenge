class Element {
    constructor(name, buildYear) {
        this.name = name
        this.buildYear = buildYear
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numOfTrees) {
        super(name, buildYear);
        this.area = area;
        this.numOfTrees = numOfTrees;
    }

    treeDencity() {
        const density = this.numOfTrees / this.area;
        console.log(`${this.name} has a tree dencity ${density} trees per km`)
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny')
        classification.set(2, 'small')
        classification.set(3, 'normal')
        classification.set(4, 'big')
        classification.set(2, 'huge')
        console.log(`${this.name} build in ${this.buildYear} is a ${classification.get(this.size)} street`)
    }
}

const allParks = [new Park('Green park', 1987, 0.2, 215), new Park('National park', 1894, 2.9, 3541), new Park('Oak park', 1953, 0.4, 949)]
const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('EvergreenStreet', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset boulevard', 1982, 2.5, 5)]

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) =>  prev + cur, 0);
    
    return [sum, sum / arr.length];    
}

function reportParks(p) {
    console.log('---------------Parks report-----------------')

    allParks.forEach((cur) => {
        cur.treeDencity();
    })
    const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(` Our ${p.length} parks have an average of ${avgAge} years.`);

    const i = p.map(el => el.numOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than a 1000 trees`)
}

function reportStreets(s) {
    console.log('-----------------Streets report--------------------')
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total legth of ${totalLength}km with an average of ${avgLength}km`)

    s.forEach(el => el.classifyStreet())
}

reportParks(allParks);
reportStreets(allStreets);