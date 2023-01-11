<template>
	<div class="landing w-full h-screen bg-no-repeat bg-left-bottom py-[30px] flex flex-col items-center justify-between lg:justify-center">
		<div class="w-full lg:w-fit flex items-center justify-between lg:justify-center relative ">
			<div class="flex items-center justify-between px-[15px] w-full">
				<div>
					<img src="../assets/img/icon/logo.svg" class="block lg:hidden" alt="">		
				</div>
				<div>
					<img src="../assets/img/icon/menu.svg" class="block lg:hidden" alt="">
				</div>
			</div>
			<img src="../assets/img/icon/desktop_logo.svg" class="hidden lg:block" alt="Logo">
	
			<div class="fixed top-0 h-screen left-0 bg-white w-[255px] lg:hidden flex items-center justify-center">
				<div class="space-y-3 ">
					<p class="font-lato font-[500] text-[18px] mt-[10px]">Open Account</p>
					<p class="font-lato font-[500] text-[18px] mt-[10px]">Sign Up </p>
					<p class="font-lato font-[500] text-[18px] mt-[10px]">Sign In </p>

				</div>
			
			</div>
		</div>

		<div class="h-[357px] pt-[12px] flex flex-col justify-between mb-[30px] w-full">
			<button class="bg-white w-fit mx-auto rounded-[10px] p-2 flex items-center gap-[10px]">
				<img src="../assets/img/icon/green_ripple.svg" alt="">
				<span class="flex items-center gap-2 text-sm text-[#8F92A1]">Quick Banking
					<img src="../assets/img/icon/right_arrow.svg" alt="">
				</span>
			</button>

			<div class="flex pt-[20px] pb-[35px] w-full items-center justify-center">
				<div class="hidden md:grid gap-5 grid-cols-3">
				<div class="w-[166px] h-[197px] p-[20px_10px] rounded-[10px] bg-white">				
					<img src="../assets/img/icon/account_logo.svg" alt="">
					<p class="font-lato font-[700] mt-[10px]">Open Account</p>
					<p class="font-lato font-[500] text-[14px] mt-[10px]">New to Accion MFB? Click here to open an account with us.</p>

				</div>
				<div class="w-[166px] h-[197px] p-[20px_10px] rounded-[10px] bg-white">				
					<img src="../assets/img/icon/register.svg" alt="">
					<p class="font-lato font-[700] mt-[10px]">Register</p>
					<p class="font-lato font-[500] text-[14px] mt-[10px]">Already have an offline account with Accion MFB? Click here to register. </p>

				</div>
				<div class="w-[166px] h-[197px] p-[20px_10px] rounded-[10px] bg-white">				
					<img src="../assets/img/icon/mdi_login-variant.svg" alt="">
					<p class="font-lato font-[700] mt-[10px]">Login</p>
					<p class="font-lato font-[500] text-[14px] mt-[10px]">Already have an offline account with Accion MFB? Click here to login</p>

				</div>
			
			</div>
		</div>
			<div class="flex flex-col items-center gap-3 w-full px-[15px] ">
				<button class="flex items-center justify-center gap-3 w-full md:w-[50%] text-white font-bold text-base h-[56px] rounded-[10px] border-2 border-[#E87724]">
					<div class="flex items-center gap-3">
						<img src="../assets/img/icon/google_play.svg" alt="">
						<span>Google Play</span>
					</div>
				</button>

				<button class="flex items-center justify-center gap-3 w-full md:w-[50%] text-white font-bold text-base h-[56px] rounded-[10px] border-2 border-[#E87724]">
					<div class="flex items-center gap-3">
						<img src="../assets/img/icon/apple_store.svg" alt="">
						<span>Apple store</span>
					</div>
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	div.landing{
		background-image: url('https://s3-alpha-sig.figma.com/img/4305/33bb/ea05537a2439458191f1429b07be872b?Expires=1673827200&Signature=dejGfoUb9Fe-9oTdTWKU0UVJfuZfZWEn~2M~O-qMnOUZvliwGfkjRYhRjzmX0nBpB862sRVIamkzORjsnWb95h8vRV7aWv4fus051-wTjtU92nj4jFXrlVB5FwVHhGSIhyFjgPu-QzVJclq2AgR0s8BQOzFHSI5oaVV2SrJcRqLA~zaNq8pwk7FNVo4O9ID38yCWU0k9pTPQbqT1dm~B2ArwPbOOB~G86p4aRhrJTaz~TzSF5~MdSgkZaMYed~xoeqxoZMsO566kAGY6dNknMpvWSedp9VlgRHdA4CE~lVP7CepG96nQtcgqNzc9V1SXwC1p-34wbFQdqXqyIcZxDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
	}
</style>