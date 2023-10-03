require('./helpers.js');

let cats = ["Milo", "Otis", "Garfield"];

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;
      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', function () {
        destructivelyAppendCat('Ralph');
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    function destructivelyAppendCat(name) {
      cats.push(name);
    }

    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        destructivelyPrependCat("Bob");
        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    function destructivelyPrependCat(name) {
      cats.unshift(name);
    }

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        destructivelyRemoveLastCat();
        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    function destructivelyRemoveLastCat() {
      cats.pop();
    }

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        destructivelyRemoveFirstCat();
        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });

    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        appendCat("Broom");
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    function appendCat(name) {
      return [...cats, name];
    }

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        prependCat("Arnold");
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    function prependCat(name) {
      return [name, ...cats];
    }

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        removeLastCat();
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    function removeLastCat() {
      return cats.slice(0, -1);
    }

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        removeFirstCat();
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    function removeFirstCat() {
      if (!cats || cats.length === 0) {
        return [];
      }
      return cats.slice(1);
    }
  });
});
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  if (!cats || cats.length === 0) {
    return [];
  }
  return cats.slice(1);
}

module.exports = {
  cats,
  destructivelyPrependCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};