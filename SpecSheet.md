# SpecSheet

## Database

The backend stores data in MongoDB

### Scheme

#### User Info

User info is stored in a collection called `users`.

Each user document contains the following fields:

- `_id`: The name of the user, as a string 
- `email`: The email address of the user, as a string. This is used by the auto-logout feature.
- `clockEvents`: A list of clock event (clock-in or clock-out) records. Each clock event document contains the following fields:
  - `timestamp`: A signed 64-bit integer containing the system time of the clock event, in milliseconds from the Unix epoch.
  - `clockingIn`: A boolean specifying whether the event was a clock-in (`true`) or a clock-out (`false`).
- `lastEvent`: The time of the last clock event. This is stored for caching purposes; if you are editing the user object manually, delete it to avoid errors.
- `inNow`: Whether the user is currently clocked in. This is stored for caching purposes; if you are editing the user object manually, delete it to avoid errors.

#### Credential Info

Credentials (accounts) are stored in a collection called `credentials`.

Each credential document contains the following fields:

* `_id`: The username of the credential.
* `password`: The encoded (hashed) password of the credential.
* `accessLevel`: The access level of the credential (`TIMECLOCK`, `TIMESHEET`, or `ADMIN`).

#### Logging

The backend stores an event history in a collection called `log`.

Each log contains the following fields:

- `timestamp`: The time of the event, in milliseconds from the UNIX epoch.
- `user`: The username or name.
- `clockIn`: Boolean if user was clocking in (false if clocking out)
- `outstandingLogout`: User didn't log out before midnight.