import Cell from "./cell";
import Link from "./link";
import { dist } from "./utils";

class Rigidbody {
  private cells: Cell[];
  private links: Link[];
  private ctx: CanvasRenderingContext2D;

  public constructor(cells: Cell[], ctx: CanvasRenderingContext2D) {
    this.cells = cells;
    this.links = [];
    this.ctx = ctx;
    this.linkCells();
  }

  private linkCells() {
    for (let i = 0; i < this.cells.length; i++) {
      let j = (i + 1) % this.cells.length;
      this.links.push(
        new Link(
          this.cells[i],
          this.cells[j],
          dist(
            this.cells[i].getPositionCurrent,
            this.cells[j].getPositionCurrent
          ),
          this.ctx
        )
      );
    }
  }
}

export default Rigidbody;
