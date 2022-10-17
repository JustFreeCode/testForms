import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ObservedValueOf } from 'rxjs';
import { ContactSubformComponent } from '../contact-sub-form/contact-sub-form.component';
import { NameSubFormComponent } from '../name-sub-form/name-sub-form.component';
import { User } from '../types/user.types';
import { UserService } from '../user.service';

interface ProfileForm {
  name?: ObservedValueOf<NameSubFormComponent['formReady']>;
  contact?: ObservedValueOf<ContactSubformComponent['formReady']>;
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss'],
})
export class UserProfileFormComponent implements OnInit {
  /**
   * The initial data received from the backend.
   * Remove this if you don't have any initial form data.
   */
  initialUser?: User;

  /**
   * The current form data, provided by the child forms.
   * This will be sent to the backend when submitting the form.
   */
  user?: User;

  form = this.fb.group<ProfileForm>({});

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    // Fetch initial data from the (fake) backend
    this.userService.fetchUser().subscribe((user) => {
      this.initialUser = user;
      this.user = user;
    });
  }

  addChildForm<K extends keyof ProfileForm>(
    name: K,
    group: Exclude<ProfileForm[K], undefined>
  ) {
    this.form.setControl(name, group);
  }

  patchUser(patch: Partial<User>) {
    if (!this.user) throw new Error('Missing user');
    this.user = { ...this.user, ...patch };
  }

  onSubmit() {
    if (!this.user) throw new Error('Missing user');

    this.userService.updateUser(this.user).subscribe((user) => {
      this.user = user;
      alert('User updated!');
    });
  }
}
