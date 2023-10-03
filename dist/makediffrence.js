"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let newArray = [];
        fs_1.default.readFile("data.json", "utf8", (err, data) => {
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
                    element.quicknode["diffrence"] =
                        `${(Date.parse(nextElement.quicknode.time) -
                            Date.parse(element.quicknode.time)) / 1000} sec`;
                    element.infura["diffrence"] =
                        `${(Date.parse(nextElement.infura.time) - Date.parse(element.infura.time)) / 1000} sec`;
                    element.heimdallApi["diffrence"] =
                        `${(Date.parse(nextElement.heimdallApi.time) -
                            Date.parse(element.heimdallApi.time)) / 1000} sec`;
                    newArray.push(element);
                }
                console.log(newArray);
                // You can now work with the 'jsonArray' variable as needed
            }
            catch (error) {
                console.error(`Error parsing JSON: ${error}`);
            }
        });
    });
}
main();
//# sourceMappingURL=makediffrence.js.map