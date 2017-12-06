import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items = [
    { name: 'Tandoori Naan', price: Number(1.50).toFixed(2), category: 'Breads' },
    { name: 'Garlic Naan', price: 1.75, category: 'Breads' },
    { name: 'Malai Kofta', price: 9.99, category: 'Curries' },
    { name: 'Dal Makhni', price: 9.99, category: 'Curries' },
    { name: 'Rajma Masala', price: 9.99, category: 'Curries' },
    { name: 'Paneer Makhni', price: 9.99, category: 'Curries' }
  ];

  newItem = 'Name, Price, Category';
  newObj = { name: '', price: 0.00, category: '' };

  pushItem = function () {
    if (this.newItem !== '') {
      const data: String[] = this.newItem.split(',');
      this.newObj.name = data[0].trim();
      this.newObj.price = Number(+(data[1].trim())).toFixed(2);
      this.newObj.category = (data[2].trim());
      console.log(data);
      this.items.push(this.newObj);
      this.newObj = { name: '', price: 0.00, category: '' };
      this.newItem = '';
    }
  };

  removeItem = function(index) {
    this.items.splice(index, 1);
  };

  ngOnInit() {

  }

}
