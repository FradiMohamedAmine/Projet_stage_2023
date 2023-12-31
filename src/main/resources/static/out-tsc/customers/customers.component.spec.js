import { TestBed } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';
describe('CustomersComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CustomersComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CustomersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=customers.component.spec.js.map