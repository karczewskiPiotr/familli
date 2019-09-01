require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  describe 'GET #home' do
    before { get :home }

    describe 'successful response' do
      it { expect(response).to be_successful }
      it { expect(response).to render_template('home') }
    end
  end
end
