describe('Simple functional testing', function(){
	beforeEach(function(){
		console.log('New test process');
	});
	
	it('sum test', function(){
		expect(plus(1,2)).toEqual(3);
	});
	
	it('dif test', function(){
		expect(minus(1,2)).toEqual(-1);
	});
	
	it('div test', function(){
		expect(div(1,0)).toEqual(Infinity);
	});
	
	it('mult test', function(){
		expect(mult(1,2)).toEqual(2);
	});
	
	afterEach(()=>{console.log('performed')});
	
});