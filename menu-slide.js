// WRITED BY mrJson01 BITCH

function Slide(menu,time=.21,hidden=true)
		{
			this.menu = menu;
			this.time = time;
			this.hidden = hidden;
			this.flaga = true;

			let that = this;

			function margin(obj,time,height){
				//execute x

				obj.style.transition='margin '+time+'s linear';
				obj.style.marginTop=height+"px";

			}

			function scale(obj,time,scale)
			{
				obj.style.transition="transform "+time+"s linear";
				obj.style.transform=`scale(${scale})`;
			}


			function onion_1(time_1,items,x)
			{

				let time_2 = this.time-time_1;
				scale(items[x],time_2,1);

				let that = this;

				setTimeout(function(){onion_2.call(that,items,x);},time_2*1000);
			}

			function onion_2(items,x)
			{
				if(x+1<items.length)show.call(this,x+1);
				else this.flaga=true;
			}

			function show(x)
			{
				let time_1 = (this.time*2)/3;

				margin(items[x],time_1,0);

				let that = this;

				setTimeout(function(){onion_1.call(that,time_1,items,x);},time_1*1000);

			}

			function onion_3(height,time_1,items,x)
			{
				let time_2 = this.time-time_1;
				margin(items[x],time_2,-height);

				let that = this;

				setTimeout(function(){onion_4.call(that,items,x);},time_2*1000);
			}

			function onion_4(items,x)
			{
				if(x-1>=0)hide.call(this,x-1);
				else this.flaga=true;
			}


			function hide(x)
			{
				let time_1 = this.time/3;

				let height = items[x].getBoundingClientRect().height;

				scale(items[x],time_1,0.95);

				let that = this;
				setTimeout(function(){onion_3.call(that,height,time_1,items,x);},time_1*1000);
			}
							


			function click(){
				//execute x

				if(this.flaga==true)
				{
					this.flaga=false;

					var items=this.menu.querySelectorAll('.menu-item');

					//czy rozwiniete czy nie
					if(this.hidden==true)
					{
						show.call(this,0);
						this.hidden=false;
					}
					else 
					{
						hide.call(this,items.length-1);
						this.hidden=true;
					}

				}

			}

			//Dodawanie event do toggle i ustawianie hidden,z-index

			this.menu.style.position="";

			let items = this.menu.querySelectorAll('.menu-item');

				this.menu.querySelector('.toggle').addEventListener('click',function(){ click.call(that); });

				this.menu.querySelector('.toggle').style.zIndex=items.length+1; 
				this.menu.querySelector('.toggle').style.position="relative";

				for(var j=0;j<items.length;j++)
				{
					items[j].style.zIndex =items.length-j;
					items[j].style.position='relative';
				}

				if(this.hidden)
				{
					//funkcja margin

					let i = 0;
					while(items[i])
					{
						let height = items[i].getBoundingClientRect().height;

						margin(items[i],0,-height);
						scale(items[i],0,0.95);
						i++;
					}

				}


		}
