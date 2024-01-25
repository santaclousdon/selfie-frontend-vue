export default function ({ store, redirect }) {
  // if (localStorage.auth) return redirect('/auth/dashboard')

  if (store.$auth.$state.loggedIn) return redirect('/auth/dashboard')
  else return redirect('/home')
}
