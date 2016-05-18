describe("Simple Test", function() {

  beforeEach(module('fusion'));

  it("should be my name", function(){
    var name = "Anshul Singh";
    console.log(name);
    expect(name).toBe("Anshul Singh");
  });

  it("should be true", function(){
    var boolValue = true;
    console.log(boolValue);
    expect(boolValue).toBe(true);
  });

  it("should be exactly as defined in controller", inject(function($controller){
    var scope = {};
    $controller('testCtrl', {$scope: scope});
    var greetingText = scope.greeting;
    console.log(greetingText);
    expect(greetingText).toBe("Folks");
  }));
});
