function resetPosition () {
    resetRotationPosition()
    while (!(isSwitchOn(linearSwitchPin))) {
        stepperBackward(linearStepper, 1)
    }
}
function calibrateMovement () {
	
}
function resetRotationPosition () {
    degreesMax = 90
    while (!(isSwitchOn(rotationSwitchPin)) && degreesMoved < degreesMax) {
        degreesMoved += 1
        stepperForward(linearStepper, 1)
    }
    // TODO calibrate if we're on the wrong side of the switch
    if (!(isSwitchOn(rotationSwitchPin))) {
        stepperBackward(linearStepper, degreesMoved)
degreesMoved = 0
        while (!(isSwitchOn(rotastionSwitchPin)) && degreesMoved < degreesMax) {
            degreesMoved += 1
            stepperBackward(linearStepper, 1)
        }
    }
    if (!(isSwitchOn(rotationSwitchPin))) {
        basic.showIcon(IconNames.Confused)
        return false
    }
    return true
}
let degreesMax = 0
let degreesMoved = 0
let linearSwitchPin = DigitalPin.P0
let linearStepper = Kitronik_Robotics_Board.StepperMotors.Stepper1
let rotationSwitchPin = DigitalPin.P1
let rotationStepper = Kitronik_Robotics_Board.StepperMotors.Stepper1
function isSwitchOn(pin: DigitalPin) {
    return pins.digitalReadPin(pin) == 1
}
function stepperForward(stepper: Kitronik_Robotics_Board.StepperMotors, degrees: number) {
    Kitronik_Robotics_Board.stepperMotorTurnAngle(stepper, Kitronik_Robotics_Board.MotorDirection.Forward, degrees)
}
function stepperBackward(stepper: Kitronik_Robotics_Board.StepperMotors, degrees: number) {
    Kitronik_Robotics_Board.stepperMotorTurnAngle(stepper, Kitronik_Robotics_Board.MotorDirection.Reverse, degrees)
}

calibrateMovement()
