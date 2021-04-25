const subscribe = ()=>(
<div class="mx-auto px-1 bg-white py-2 sm:flex sm rounded-xl">
    <div class="sm:max-w-md">
      <h1 class="font-semibold text-xl py-4">Subscribe to my newsletter</h1>
      <p class="text-gray-600 text-sm leading-relaxed">In this weekly newsletter I'm going to share with you what's new and cool in the world of web development, with content for everyone, from beginners to pros. There's also an interview question of the week, where you can test your skills and I'll share the results the following week. I'll also send you jokes and stories. And pics of mechanical keyboards. I won't spam though, I promise.</p>
    </div>
    <form class="flex bg-green-50 rounded-xl p-1 sm:flex-1 justify-items-center items-center " onSubmit={(e)=>{e.preventDefault()}}>
      <input 
        type="email"
        placeholder="contact.uiuxdx.com" 
        class="text-green-800 rounded outline-none ring-1 focus:ring-2 ring-green-100 py-1 px-1 flex:1" />
      <button type="submit" class="focus:outline-none px-2 py-1 ml-1 bg-green-200 text-green-600 rounded focus:bg-green-500 focus:text-white focus:ring-green-400 focus:ring-2">subscribe</button>
    </form>
  </div>
)
export default subscribe;