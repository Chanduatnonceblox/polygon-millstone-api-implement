import fs from "fs";

async function main() {
  let newArray = [];

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    try {
      // Parse the JSON data
      const jsonArray = JSON.parse(data);

      // Log the JSON array to the console
      console.log("JSON Array:");

      for (let index = 0; index < jsonArray.length - 1; index++) {
        let element = jsonArray[index];
        const nextElement = jsonArray[index + 1];

        element.quicknode["diffrence"] = `${
          (Date.parse(nextElement.quicknode.time) -
            Date.parse(element.quicknode.time)) /
          1000
        } sec`;
        element.infura["diffrence"] = `${
          (Date.parse(nextElement.infura.time) -
            Date.parse(element.infura.time)) /
          1000
        } sec`;
        element.heimdallApi["diffrence"] = `${
          (Date.parse(nextElement.heimdallApi.time) -
            Date.parse(element.heimdallApi.time)) /
          1000
        } sec`;

        newArray.push(element);
      }

      console.log(newArray);

      // You can now work with the 'jsonArray' variable as needed
    } catch (error) {
      console.error(`Error parsing JSON: ${error}`);
    }
  });
}

main();
