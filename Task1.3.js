function mapArray(arr) {
    try {
      return arr.map((item) => item * 2)
    }
    catch (err) {
        throw new TypeError("map isn't a function")
    }
    }

    console.log(mapArray("isNotArray"))