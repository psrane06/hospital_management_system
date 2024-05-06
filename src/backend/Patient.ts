class Patient {
  protected id: number;
  private name: string;
  private dob: string;
  private password: string;
  private email: string;

  constructor(name: string, dob: string, password: string, email: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.dob = dob;
    this.password = password;
    this.email = email;
  }

  public store() {
    try {
      localStorage.setItem(this.id.toString(), JSON.stringify(this));
    } catch (e) {
      console.log(e);
    }
  }
}

export default Patient;
