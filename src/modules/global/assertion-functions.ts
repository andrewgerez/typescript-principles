/**
 * @file assertion-functions.ts
 * @description This file contains an example of using assertion functions in TypeScript to ensure type safety.
 * 
 * The `SDK` class includes a method `assertUserIsLoggedIn` that asserts the user is logged in.
 * This assertion function enhances type safety by narrowing the type of `this` within the class methods,
 * ensuring that `loggedInUserId` is defined before proceeding with operations that require it.
 */

function createPost(userId: string, title: string) { }

class SDK {
  constructor(public loggedInUserId?: string) { }

  createPost(title: string) {
    this.assertUserIsLoggedIn()

    createPost(this.loggedInUserId, title)
  }

  assertUserIsLoggedIn(): asserts this is this & {
    loggedInUserId: string
  } {
    if (!this.loggedInUserId) {
      throw new Error('User is not logged in')
    }
  }
}
