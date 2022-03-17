import { Space } from "../model/Model";

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: "Jakarta",
      name: "Monas",
      spaceId: "123",
    });

    result.push({
      location: "Bandung",
      name: "Gedung Sate",
      spaceId: "121",
    });

    result.push({
      location: "Paris",
      name: "Eiffel",
      spaceId: "101",
    });

    return result;
  }
}
