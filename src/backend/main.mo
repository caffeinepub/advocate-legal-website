import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactSubmission {
    public func compare(cs1 : ContactSubmission, cs2 : ContactSubmission) : Order.Order {
      Text.compare(cs1.subject, cs2.subject);
    };
  };

  let admin : Principal = Principal.fromText("aaaaa-aa");

  func requireAdmin(caller : Principal) {
    if (caller != admin) { Runtime.trap("Only admin can call this function") };
  };

  let submissions = Map.empty<Int, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      subject;
      message;
      timestamp;
    };
    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    requireAdmin(caller);
    submissions.values().toArray().sort();
  };
};
