// const { fromEvent } = Rx;
// const { map, pluck } = RxOperators;

// const input = document.createElement('input');
// const container = document.querySelector('.container');
// container.appendChild(input);

// const observable = fromEvent(input, 'input').pipe(
//   pluck('target', 'value'),
//   map((value) => parseInt(value)),
//   map((value) => {
//     if (isNaN(value)) {
//       throw new Error('Enter a number!');
//     }

//     return value;
//   })
// );

// observable.subscribe({
//   next(value) {
//     console.log(`Your value is ${value}`);
//   },
//   error(err) {
//     console.error(err.message);
//   },
// });
// // needed to run with this tool
// // https://out.stegrider.vercel.app
// observable;

// const { Observable } = Rx;
// const { tap, share } = RxOperators;

// const observable = new Observable((subscriber) => {
//   subscriber.next(10);
//   subscriber.next(20);
//   subscriber.next(30);

//   subscriber.complete();

//   // subscriber.error(new Error('alskdjalkdja'));
// }).pipe(
//   tap((value) => console.log('tap', value)),
//   share()
// );

// observable.subscribe({
//   next(value) {
//     console.log(`Your value is ${value}`);
//   },
//   complete() {
//     console.log('complete');
//   },
//   error(err) {
//     console.error(err.message);
//   },
// });

// observable.subscribe((value) => {
//   console.log('Second subscribe', value);
// });

// // needed to run with this tool and remove ui output
// // https://out.stegrider.vercel.app
// new Observable(() => {});

// const { Observable } = Rx;

// const observable = new Observable((subscriber) => {
//   subscriber.next(10);
// });

// observable.subscribe((value) => {
//   console.log('subscribe', value);
// });
// // needed to run with this tool
// // https://out.stegrider.vercel.app
// observable;
