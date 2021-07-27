#define LED 2
#define light 3

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
  pinMode(light, OUTPUT);
  digitalWrite(LED, HIGH);
  digitalWrite(light, HIGH);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available() == 1)
  {
    String val = Serial.readString();
    Serial.println(val);
    if(val == "LED on")
    {
      digitalWrite(LED, LOW);
    }
    if(val == "LED off")
    {
      digitalWrite(LED, HIGH);
    }
    if(val == "light on")
    {
      digitalWrite(light, LOW);
    }
    if(val == "light off")
    {
      digitalWrite(light, HIGH);
    }
    if(val == "all on")
    {
      digitalWrite(LED, LOW);
      digitalWrite(light, LOW);
    }
    if(val == "all of")
    {
      digitalWrite(LED, HIGH);
      digitalWrite(light, HIGH);
    }
  }
}
