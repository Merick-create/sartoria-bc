import { RequestEntity } from "./entity";

export class RequestService {
  private requests: RequestEntity[] = [];
  create(data: Omit<RequestEntity, "id" | "data_invio">): RequestEntity {
    const newRequest: RequestEntity = {
      ...data,
      id: crypto.randomUUID(),
      data_invio: new Date(),
    };
    this.requests.push(newRequest);
    return newRequest;
  }

  getById(id: string): RequestEntity | undefined {
    return this.requests.find(r => r.id === id);
  }
  getAll(order: "asc" | "desc" = "desc"): RequestEntity[] {
    return [...this.requests].sort((a, b) => {
      const diff = a.data_invio.getTime() - b.data_invio.getTime();
      return order === "asc" ? diff : -diff;
    });
  }
  delete(id: string): boolean {
    const index = this.requests.findIndex(r => r.id === id);
    if (index >= 0) {
      this.requests.splice(index, 1);
      return true;
    }
    return false;
  }
}
