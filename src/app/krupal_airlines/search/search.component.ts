import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { SearchFlight } from 'src/app/model/booking.model';

@Component({
    selector: 'search-krupal',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
})

export class SearchComponent implements OnInit, DoCheck {
    isChecked: boolean = true
    selected = '1';

    countries: any[] | undefined;
    searchFlight:SearchFlight = new SearchFlight();
    selectedCountry: string | undefined;
    length?: number;

    countryCtrl: FormControl;
    searchForm: FormGroup;

    filteredCountry: Observable<any[]>;

    country_lis: any[] = [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Åland Islands', code: 'AX' },
        { name: 'Albania', code: 'AL' },
        { name: 'Algeria', code: 'DZ' },
        { name: 'American Samoa', code: 'AS' },
        { name: 'AndorrA', code: 'AD' },
        { name: 'Angola', code: 'AO' },
        { name: 'Anguilla', code: 'AI' },
        { name: 'Antarctica', code: 'AQ' },
        { name: 'Antigua and Barbuda', code: 'AG' },
        { name: 'Argentina', code: 'AR' },
        { name: 'Armenia', code: 'AM' },
        { name: 'Aruba', code: 'AW' },
    ];


    constructor(private formBuilder: FormBuilder) {
        this.countryCtrl = new FormControl();
        this.filteredCountry = this.countryCtrl.valueChanges.pipe(
            startWith(''),
            map((country) =>
                country ? this.filtercountry(country) : this.country_lis.slice()
            )
        );
        this.searchForm = this.formBuilder.group({
            fromLocation: ['', Validators.required],
            toLocation: ['', Validators.required],
            departureDate: ['', Validators.required],
            returnDate:!this.isChecked ? ['',Validators.required] :[''],
            passengers: ['', Validators.required]
          });
    }


    ngDoCheck(): void {
        returnDate:!this.isChecked ? ['',Validators.required] :['']
    }

    filtercountry(name: string) {
        let arr = this.country_lis.filter(
            (country) => country.name.toLowerCase().indexOf(name.toLowerCase()) === 0 
        ).map(country=>!this.searchFlight.fromLocation);

        return arr.length ? arr : [{ name: 'Not found', code: 'null' }];
    }
    ngOnInit() {
    }

    radioChange(flag: boolean) {
        this.isChecked = flag;
    }

    submit() {
        if(this.searchForm.valid){
            console.log(this.searchFlight);
        }
        
        
      }
}
