// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import AccountLayout from './layouts/AccountLayout/AccountLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'
import LegalLayout from './layouts/LegalLayout/LegalLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Set wrap={AccountLayout}>
        <Route path="/notification-settings" page={NotificationSettingsPage} name="notificationSettings" />
        <Route path="/privacy-safety" page={PrivacySafetyPage} name="privacySafety" />
        <Route path="/my-profile" page={MyProfilePage} name="myProfile" />
        <Route path="/my-account" page={MyAccountPage} name="myAccount" />
        <Route path="/invites" page={InvitesPage} name="invites" />
      </Set>
      <Set wrap={LegalLayout}>
        <Route path="/terms-conditions" page={TermsConditionsPage} name="termsConditions" />
        <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" />
        <Route path="/privacy-policy" page={PrivacyPolicyPage} name="privacyPolicy" />
      </Set>
      <Set wrap={InteriorLayout}>
        <Route path="/feed" page={FeedPage} name="feed" />
        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/bookmarks" page={BookmarksPage} name="bookmarks" />
        <Route path="/notifications" page={NotificationsPage} name="notifications" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
