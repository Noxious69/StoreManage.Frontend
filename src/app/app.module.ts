import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { InsertneworderComponent } from './pages/insertneworder/insertneworder.component';
import { DialogComponent } from './pages/firstpage/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OrderlistComponent } from './pages/orderlist/orderlist.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { OrdersComponent } from "./pages/orderlist/shared/orders/orders.component";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxMatDateFnsModule }  from 'ngx-material-date-fns-adapter';
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { fr } from 'date-fns/esm/locale';

@NgModule({
    declarations: [
        AppComponent,
        FirstpageComponent,
        InsertneworderComponent,
        DialogComponent,
        OrderlistComponent,
        
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: fr }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatRippleModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatCheckboxModule,
        MatMenuModule,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatSelectModule,
        MatAutocompleteModule,
        HttpClientModule,
        OrdersComponent,
        MatExpansionModule,
        MatProgressBarModule,
        NgxMatDateFnsModule
    ]
})
export class AppModule { }
