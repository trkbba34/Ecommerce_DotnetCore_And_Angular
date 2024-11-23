import { Component, inject, OnInit } from '@angular/core';
import { AddressPipe } from '../../../shared/pipes/address.pipe';
import { PaymentCardPipe } from '../../../shared/pipes/payment-card.pipe';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../shared/models/order';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-order-detailed',
  standalone: true,
  imports: [
    AddressPipe,
    PaymentCardPipe,
    DatePipe,
    CurrencyPipe,
    MatCardModule,
    MatButton,
    RouterLink,
  ],
  templateUrl: './order-detailed.component.html',
  styleUrl: './order-detailed.component.scss',
})
export class OrderDetailedComponent implements OnInit {
  private orderService = inject(OrderService);
  private activatedRoute = inject(ActivatedRoute);
  order?: Order;

  ngOnInit(): void {
    this.loaderOrder();
  }

  loaderOrder() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;
    this.orderService.getOrderDetailed(+id).subscribe({
      next: (order) => (this.order = order),
    });
  }
}
