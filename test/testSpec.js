describe("Simple Test result", function() {

  beforeEach(module('fusion'));

  it("should be my name", function(){
    var name = "Anshul Singh";
    expect(name).toBe("Anshul Singh");
  });

  it("should be true", function(){
    var boolValue = true;
    expect(boolValue).toBe(true);
  });

  it("should be exactly as defined in controller", inject(function($controller){
    var scope = {};
    $controller('testCtrl', {$scope: scope});
    var greetingText = scope.greeting;
    expect(greetingText).toBe("Folks");
  }));

  describe("custom matcher", function(){
      beforeEach(function() {
        this.addMatchers(customMatchers);
      });
      it("should result if numbers are close to each other", function(){
        var num1 = 4.12, num2 = 4.120001, precision = 3;
        expect(num1).toBeCloseTo(num2, precision);
      });
      it("should result if numbers are equal", function () {
        expect(3).toBeCustomTest(8);
      });
  });
});
