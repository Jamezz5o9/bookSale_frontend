export class Purchase{
  id: number | undefined;
  bookId: number | undefined;
  userId: number | undefined;
  purchaseTime: Date = new Date();
  price: number | undefined;

  constructor(bookId?: number, userId?: number, price?: number) {
    this.bookId = bookId;
    this.userId = userId;
    this.price = price;
  }

}
