// import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from '../../environments/environment'; // Adjust the path as needed

// @Component({
//   selector: 'app-auth',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './auth.component.html',
//   styleUrls: ['./auth.component.css']
// })
// export class AuthComponent implements AfterViewInit {
//   loginData = {
//     email: '',
//     password: ''
//   };

//   signupData = {
//     name: '',
//     email: '',
//     password: ''
//   };

//   isLogin = true;

//   @ViewChild('loginBtn', { static: false }) loginBtn!: ElementRef;
//   @ViewChild('signupBtn', { static: false }) signupBtn!: ElementRef;

//   private auth = getAuth(initializeApp(firebaseConfig)); // Initialize Firebase

//   constructor(private renderer: Renderer2) {}

//   toggleForm(formType: string) {
//     this.isLogin = formType === 'login';
//   }

//   async onLogin() {
//     try {
//       const { email, password } = this.loginData;
//       await signInWithEmailAndPassword(this.auth, email, password);
//       console.log('Login successful');
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   }

//   async onSignup() {
//     try {
//       const { email, password } = this.signupData;
//       await createUserWithEmailAndPassword(this.auth, email, password);
//       console.log('Signup successful');
//     } catch (error) {
//       console.error('Signup error:', error);
//     }
//   }

//   ngAfterViewInit() {
//     this.renderer.listen(this.loginBtn.nativeElement, 'click', () => {
//       const parent = this.loginBtn.nativeElement.closest('.form-structor');
//       if (!parent.classList.contains('slide-up')) {
//         this.renderer.addClass(parent, 'slide-up');
//       } else {
//         this.renderer.removeClass(this.signupBtn.nativeElement.closest('.signup'), 'slide-up');
//         this.renderer.removeClass(parent, 'slide-up');
//       }
//     });

//     this.renderer.listen(this.signupBtn.nativeElement, 'click', () => {
//       const parent = this.signupBtn.nativeElement.closest('.signup');
//       if (!parent.classList.contains('slide-up')) {
//         this.renderer.addClass(parent, 'slide-up');
//       } else {
//         this.renderer.removeClass(this.loginBtn.nativeElement.closest('.form-structor'), 'slide-up');
//         this.renderer.removeClass(parent, 'slide-up');
//       }
//     });
//   }
// }


import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../environments/environment'; // Adjust the path as needed
import { Router } from '@angular/router'; // Import Router
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements AfterViewInit {
  loginData = {
    email: '',
    password: ''
  };

  signupData = {
    name: '',
    email: '',
    password: ''
  };

  isLogin = true;

  @ViewChild('loginBtn', { static: false }) loginBtn!: ElementRef;
  @ViewChild('signupBtn', { static: false }) signupBtn!: ElementRef;

  private auth = getAuth(initializeApp(firebaseConfig)); // Initialize Firebase

  constructor(private renderer: Renderer2, private router: Router) {} // Inject Router

  toggleForm(formType: string) {
    this.isLogin = formType === 'login';
  }

  async onLogin() {
    try {
      const { email, password } = this.loginData;
      await signInWithEmailAndPassword(this.auth, email, password);
      console.log('Login successful');
      this.router.navigate(['/home']); // Navigate to HomeComponent
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  async onSignup() {
    try {
      const { email, password } = this.signupData;
      await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Signup successful');
    } catch (error) {
      console.error('Signup error:', error);
    }
  }

  ngAfterViewInit() {
    this.renderer.listen(this.loginBtn.nativeElement, 'click', () => {
      const parent = this.loginBtn.nativeElement.closest('.form-structor');
      if (!parent.classList.contains('slide-up')) {
        this.renderer.addClass(parent, 'slide-up');
      } else {
        this.renderer.removeClass(this.signupBtn.nativeElement.closest('.signup'), 'slide-up');
        this.renderer.removeClass(parent, 'slide-up');
      }
    });

    this.renderer.listen(this.signupBtn.nativeElement, 'click', () => {
      const parent = this.signupBtn.nativeElement.closest('.signup');
      if (!parent.classList.contains('slide-up')) {
        this.renderer.addClass(parent, 'slide-up');
      } else {
        this.renderer.removeClass(this.loginBtn.nativeElement.closest('.form-structor'), 'slide-up');
        this.renderer.removeClass(parent, 'slide-up');
      }
    });
  }
}
