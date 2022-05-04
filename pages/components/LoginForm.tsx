import React from 'react'

const LoginForm = () => {
  return (
    <div class="w-full max-w-xs">
      <form class="shadow- mb-4 rounded bg-white px-8 pt-6 pb-8">
        <div class="mb-4">
          <label
            class="mb-2 block text-sm font-bold text-gray-700"
            for="username"
          >
            Username
          </label>
          <input
            class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <label
            class="mb-2 block text-sm font-bold text-gray-700"
            for="password"
          >
            Password
          </label>
          <input
            class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Password"
          />
          {/* <p class="mb-4 text-xs italic text-red-500"> */}
            {/* Please choose a password. */}
          {/* </p> */}
        </div>
        <div class="flex items-center justify-between">
          <button
            class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
