// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AccountLayout from './layouts/AccountLayout/AccountLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'
import LegalLayout from './layouts/LegalLayout/LegalLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      {/* title on the side (same as login) */}
      <Set>
        <Route path="/waiting-list" page={WaitingListPage} name="waitingList" />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>

      {/* auth */}
      <Set>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>

      {/* title at the top of the page (same as legal pages) */}
      <Route path="/about" page={AboutPage} name="about" prerender />
      <Route path="/brand-kit" page={BrandKitPage} name="brandKit" prerender />

      {/* account layout */}
      <Set wrap={AccountLayout}>
        <Route path="/my-account" page={MyAccountPage} name="myAccount" />
        <Route path="/invites" page={InvitesPage} name="invites" />
        <Route path="/privacy-safety" page={PrivacySafetyPage} name="privacySafety" />
        <Route path="/notification-settings" page={NotificationSettingsPage} name="notificationSettings" />
      </Set>

      {/* legal pages */}
      <Set wrap={LegalLayout}>
        <Route path="/terms-conditions" page={TermsConditionsPage} name="termsConditions" prerender />
        <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" prerender />
        <Route path="/privacy-policy" page={PrivacyPolicyPage} name="privacyPolicy" prerender />
      </Set>

      <Set wrap={InteriorLayout}>
        <Route path="/tag/{hashtag:String}" page={TagPage} name="tag" />
        <Route path="/following/{id:Int}" page={FollowingPage} name="following" />
        <Route path="/followers/{id:Int}" page={FollowersPage} name="followers" />
        <Route path="/feed" page={FeedPage} name="feed" /> {/* feed from people I follow */}
        <Route path="/recommendations" page={RecommendationsPage} name="recommendations" /> {/* recommended people */}
        <Route path="/lists" page={ListsPage} name="lists" />
        <Route path="/profile/{username:String}" page={ProfilePage} name="profile" />
        <Route path="/me" page={MyProfilePage} name="myProfile" />
        <Route path="/me/edit" page={EditProfilePage} name="editProfile" />
        <Route path="/" page={HomePage} name="home" /> {/* generic feed */}
        <Route path="/bookmarks" page={BookmarksPage} name="bookmarks" />
        <Route path="/notifications" page={NotificationsPage} name="notifications" /> {/* includes feed from people I clicked the bell */}
        <Route path="/question/{id:String}" page={QuestionPage} name="question" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
