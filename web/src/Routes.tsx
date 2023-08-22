// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import AccountLayout from './layouts/AccountLayout/AccountLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'
import LegalLayout from './layouts/LegalLayout/LegalLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/about" page={AboutPage} name="about" prerender />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Set wrap={AccountLayout}>
        <Route path="/notification-settings" page={NotificationSettingsPage} name="notificationSettings" />
        <Route path="/privacy-safety" page={PrivacySafetyPage} name="privacySafety" />
        <Route path="/my-account" page={MyAccountPage} name="myAccount" />
        <Route path="/invites" page={InvitesPage} name="invites" />
      </Set>
      <Set wrap={LegalLayout}>
        <Route path="/terms-conditions" page={TermsConditionsPage} name="termsConditions" prerender />
        <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" prerender />
        <Route path="/privacy-policy" page={PrivacyPolicyPage} name="privacyPolicy" prerender />
      </Set>
      <Set wrap={InteriorLayout}>
        <Route path="/following/{id:Int}" page={FollowingPage} name="following" />
        <Route path="/followers/{id:Int}" page={FollowersPage} name="followers" />
        <Route path="/feed" page={FeedPage} name="feed" />
        <Route path="/my-profile" page={MyProfilePage} name="myProfile" />
        <Route path="/profile/{username:String}" page={ProfilePage} name="profile" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/bookmarks" page={BookmarksPage} name="bookmarks" />
        <Route path="/notifications" page={NotificationsPage} name="notifications" />
        <Set wrap={ScaffoldLayout} title="Questions" titleTo="questions" buttonLabel="New Question" buttonTo="newQuestion">
          <Route path="/questions/new" page={QuestionNewQuestionPage} name="newQuestion" />
          <Route path="/questions/{id:Int}/edit" page={QuestionEditQuestionPage} name="editQuestion" />
          <Route path="/questions/{id:Int}" page={QuestionQuestionPage} name="question" />
          <Route path="/questions" page={QuestionQuestionsPage} name="questions" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
